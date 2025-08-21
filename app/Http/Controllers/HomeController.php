<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class HomeController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('order')->orderBy('created_at', 'desc')->get();
        $featuredProjects = Project::where('is_featured', true)->orderBy('order')->get();
        
        return view('home', compact('projects', 'featuredProjects'));
    }
    
    public function e1()
    {
        return view('projects.e1');
    }
}
