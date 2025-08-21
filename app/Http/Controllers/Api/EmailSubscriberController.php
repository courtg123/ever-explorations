<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EmailSubscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class EmailSubscriberController extends Controller
{
    public function subscribe(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'name' => 'nullable|string|max:255',
            'download_product' => 'nullable|string|max:255',
            'download_version' => 'nullable|string|max:50',
            'subscribed_to_newsletter' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Check if email already exists
        $subscriber = EmailSubscriber::where('email', $request->email)->first();
        
        if ($subscriber) {
            // Update existing subscriber
            $subscriber->update([
                'name' => $request->name ?? $subscriber->name,
                'download_product' => $request->download_product,
                'download_version' => $request->download_version,
                'downloaded_at' => now(),
                'subscribed_to_newsletter' => $request->subscribed_to_newsletter ?? true
            ]);
        } else {
            // Create new subscriber
            $subscriber = EmailSubscriber::create([
                'email' => $request->email,
                'name' => $request->name,
                'download_product' => $request->download_product,
                'download_version' => $request->download_version,
                'downloaded_at' => now(),
                'subscribed_to_newsletter' => $request->subscribed_to_newsletter ?? true
            ]);
        }

        // Send email notification (if mail is configured)
        try {
            if (config('mail.default') !== 'log') {
                $type = $request->download_product ? 'download request' : 'newsletter subscription';
                Mail::raw(
                    "New {$type} on Ever Explorations!\n\n" .
                    "Email: {$request->email}\n" .
                    ($request->name ? "Name: {$request->name}\n" : "") .
                    ($request->download_product ? "Product: {$request->download_product} {$request->download_version}\n" : "") .
                    "Newsletter: " . ($request->subscribed_to_newsletter ? 'Yes' : 'No') . "\n\n" .
                    "---\n" .
                    "Total subscribers: " . EmailSubscriber::count(),
                    function ($message) use ($type) {
                        $message->to(env('ADMIN_EMAIL', 'your-email@example.com'))
                                ->subject("New {$type} - Ever Explorations");
                    }
                );
            }
        } catch (\Exception $e) {
            // Log error but don't fail the request
            Log::error('Failed to send subscription email notification: ' . $e->getMessage());
        }

        return response()->json([
            'success' => true,
            'message' => $request->download_product 
                ? 'Thank you! We\'ll notify you when downloads are available.'
                : 'Thank you for subscribing!',
            'subscriber' => $subscriber
        ]);
    }
}