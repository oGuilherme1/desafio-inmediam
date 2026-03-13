<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    public function run(): void
    {
        Customer::create([
            'name' => 'João da Silva',
            'email' => 'joao@email.com',
            'document' => '45596714003',
        ]);

        Customer::create([
            'name' => 'Maria Oliveira',
            'email' => 'maria@email.com',
            'document' => '65577833000',
        ]);
    }
}
