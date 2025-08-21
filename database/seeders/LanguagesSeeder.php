<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Language;

class LanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $languages = [
            'JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'Go',
            'Rust', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'HTML/CSS',
            'JSON', 'YAML', 'XML', 'Shell Scripts'
        ];

        foreach ($languages as $index => $language) {
            Language::create([
                'name' => $language,
                'order' => $index + 1,
                'is_active' => true
            ]);
        }
    }
}
