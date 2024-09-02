<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\str;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::Create([
            'name' => "Yan Afriyoko",
            'email' => 'admin@gmail.com',
            'password' => Hash::make('secret'),
        ]);
    }
}
