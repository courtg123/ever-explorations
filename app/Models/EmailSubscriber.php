<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmailSubscriber extends Model
{
    protected $fillable = [
        'email',
        'name',
        'download_product',
        'download_version',
        'downloaded_at',
        'subscribed_to_newsletter'
    ];

    protected $casts = [
        'downloaded_at' => 'datetime',
        'subscribed_to_newsletter' => 'boolean'
    ];
}