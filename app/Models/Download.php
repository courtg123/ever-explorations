<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Download extends Model
{
    protected $fillable = ['platform', 'version', 'download_url', 'requirements', 'is_available'];
}
