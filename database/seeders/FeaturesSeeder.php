<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Feature;

class FeaturesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $features = [
            ['icon' => '📝', 'title' => 'Monaco Editor', 'description' => 'The same powerful editor that powers VS Code, with IntelliSense and advanced editing features', 'order' => 1],
            ['icon' => '🗂️', 'title' => 'File Explorer', 'description' => 'Navigate your projects with ease using the intuitive file tree explorer', 'order' => 2],
            ['icon' => '🔖', 'title' => 'Multi-Tab Editing', 'description' => 'Work with multiple files simultaneously with tabbed interface', 'order' => 3],
            ['icon' => '🌙', 'title' => 'Dark Theme', 'description' => 'Beautiful dark theme matching VS Code for comfortable coding sessions', 'order' => 4],
            ['icon' => '📄', 'title' => 'Markdown Preview', 'description' => 'Live preview and split-view editing for Markdown documents', 'order' => 5],
            ['icon' => '📊', 'title' => 'Spreadsheet Viewer', 'description' => 'View and edit CSV and Excel files directly in the editor', 'order' => 6],
            ['icon' => '📑', 'title' => 'PDF Viewer', 'description' => 'Read and annotate PDF documents without leaving the editor', 'order' => 7],
            ['icon' => '🖼️', 'title' => 'Image Viewer', 'description' => 'Preview images in common formats directly in the editor', 'order' => 8],
            ['icon' => '📈', 'title' => 'Mermaid Diagrams', 'description' => 'Create and edit diagrams with visual Mermaid editor support', 'order' => 9],
        ];

        foreach ($features as $feature) {
            Feature::create($feature);
        }
    }
}
