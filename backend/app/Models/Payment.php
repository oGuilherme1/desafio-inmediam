<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $guarded = [];

    public function billing()
    {
        return $this->belongsTo(Billing::class);
    }

    public function creditCard()
    {
        return $this->belongsTo(CreditCard::class);
    }
}
