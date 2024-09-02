<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\str;
use App\Models\Subject;
class SubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Subject::Create([
            'name' => "Haloo",
        ]);
    }
}
