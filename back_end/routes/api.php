<?php

use App\Http\Controllers\SearchInstructorbycourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/instructors-course', SearchInstructorbycourse::class);
