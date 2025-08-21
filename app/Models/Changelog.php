<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Changelog extends Model
{
    protected $fillable = [
        'version',
        'title',
        'description',
        'features',
        'improvements',
        'fixes',
        'release_date',
        'is_major',
        'is_published'
    ];

    protected $casts = [
        'features' => 'array',
        'improvements' => 'array',
        'fixes' => 'array',
        'release_date' => 'date',
        'is_major' => 'boolean',
        'is_published' => 'boolean'
    ];
}