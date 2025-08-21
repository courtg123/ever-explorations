<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Changelog;

class ChangelogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Changelog::create([
            'version' => '1.0.0',
            'title' => 'Initial Beta Release',
            'description' => 'The first public beta release of Ever e.1 - your infinite digital workspace.',
            'features' => [
                'Infinite Canvas workspace with unlimited sessions',
                'Magic Windows for custom mini-apps and widgets',
                'Integrated Monaco Editor with full IDE capabilities',
                'Rich document support (Markdown, Mermaid diagrams, spreadsheets)',
                'Whiteboards and scratch pads for brainstorming',
                'Integrated browser for seamless web browsing',
                'Claude AI integration with MCP support',
                'Persistent state management across sessions'
            ],
            'improvements' => null,
            'fixes' => null,
            'release_date' => '2024-12-15',
            'is_major' => true,
            'is_published' => true
        ]);

        Changelog::create([
            'version' => '0.9.5',
            'title' => 'Pre-release Improvements',
            'description' => 'Final refinements before the beta launch.',
            'features' => [
                'Added file explorer with tree view',
                'Multi-tab interface implementation'
            ],
            'improvements' => [
                'Enhanced performance for large workspaces',
                'Improved memory management',
                'Better keyboard shortcuts'
            ],
            'fixes' => [
                'Fixed canvas panning issues',
                'Resolved file saving conflicts',
                'Corrected theme application bugs'
            ],
            'release_date' => '2024-12-01',
            'is_major' => false,
            'is_published' => true
        ]);

        Changelog::create([
            'version' => '0.9.0',
            'title' => 'Alpha Release',
            'description' => 'Initial alpha version for internal testing.',
            'features' => [
                'Basic infinite canvas implementation',
                'Core editing functionality',
                'Session management system'
            ],
            'improvements' => null,
            'fixes' => null,
            'release_date' => '2024-11-01',
            'is_major' => false,
            'is_published' => true
        ]);
    }
}