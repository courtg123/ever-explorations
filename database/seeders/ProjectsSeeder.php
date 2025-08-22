<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // e.1 - Featured Project (Currently the only public project)
        Project::firstOrCreate(
            ['name' => 'Ever e.1'],
            [
                'description' => 'The first official experiment I\'m excited to share with you. Your infinite digital workspace where code, ideas, and creativity converge. More than an IDE, e.1 features an infinite canvas, magic windows, persistent sessions, integrated browser, whiteboards, and AI integration. Spread your work across unlimited spaces and return exactly where you left off.',
                'url' => null, // Can be updated when deployed
                'github_url' => 'https://github.com/everexplorations/e1',
                'status' => 'beta',
                'category' => 'tool',
                'order' => 1,
                'is_featured' => true
            ]
        );

        // Future projects are saved in PROJECT_IDEAS.md
    }
}
