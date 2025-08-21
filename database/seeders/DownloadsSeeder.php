<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Download;

class DownloadsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Download::create([
            'platform' => 'macOS',
            'version' => 'Native application for macOS',
            'download_url' => '#',
            'requirements' => 'Requires macOS 10.13 or later',
            'is_available' => true
        ]);

        Download::create([
            'platform' => 'Coming Soon',
            'version' => 'Windows and Linux versions in development',
            'download_url' => null,
            'requirements' => 'Sign up for release notifications',
            'is_available' => false
        ]);
    }
}
