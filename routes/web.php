<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dev;

Route::get('/all_data',[dev::class,'all_data']);
Route::get('/cake_info/{id}',[dev::class,'cake_info']);
Route::get('/',[dev::class,'home']);
Route::any('{anything}',[dev::class,'home']);
Route::any('/{anything}/{anyth}',[dev::class,'home']);

