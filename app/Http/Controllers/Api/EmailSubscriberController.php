<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EmailSubscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

        return response()->json([
            'success' => true,
            'message' => 'Thank you! Your download will begin shortly.',
            'subscriber' => $subscriber
        ]);
    }
}