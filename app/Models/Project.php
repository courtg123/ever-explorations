<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'description', 'url', 'github_url', 'status', 'category', 'order', 'is_featured'];
}
