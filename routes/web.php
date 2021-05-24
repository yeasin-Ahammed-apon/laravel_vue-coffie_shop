<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dev;

Route::get('/',[dev::class,'home']);
Route::get('/list',[dev::class,'list']);
Route::get('/{anything}',[dev::class,'home']);
Route::get('/{anything}/{anyth}',[dev::class,'home']);
Route::delete('/delete/{id}',[dev::class,'delete_list']);

// api

