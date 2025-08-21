<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Changelog;

class ChangelogController extends Controller
{
    public function index()
    {
        $changelogs = Changelog::where('is_published', true)
            ->orderBy('release_date', 'desc')
            ->get();
            
        return response()->json($changelogs);
    }
}