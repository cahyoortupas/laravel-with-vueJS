<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\str;
use App\Models\UserSubject;

class UsersSubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserSubject::Create([
            'user_id' => 1, 
            'subject_id' => 1,
        ]);
    }
}
