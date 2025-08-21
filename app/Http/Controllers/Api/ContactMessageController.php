<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ContactMessageController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:5000'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Save to database
        $contactMessage = ContactMessage::create([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        ]);

        // Send email notification (if mail is configured)
        try {
            if (config('mail.default') !== 'log') {
                Mail::raw(
                    "New contact message received!\n\n" .
                    "From: {$request->name}\n" .
                    "Email: {$request->email}\n\n" .
                    "Message:\n{$request->message}\n\n" .
                    "---\n" .
                    "Sent from Ever Explorations website",
                    function ($message) use ($request) {
                        $message->to(env('ADMIN_EMAIL', 'your-email@example.com'))
                                ->subject('New Contact Form Submission - Ever Explorations')
                                ->replyTo($request->email, $request->name);
                    }
                );
            }
        } catch (\Exception $e) {
            // Log error but don't fail the request
            Log::error('Failed to send contact form email notification: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => 'Thank you for your message! We\'ll get back to you soon.'
        ]);
    }
}