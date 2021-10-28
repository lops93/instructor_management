<?php

use App\Http\Controllers\InstructorController;
use Illuminate\Support\Facades\Route;


Route::get('/',  [InstructorController::class, 'index'])->name('instructors.index');
Route::get('/instructors/create',  [InstructorController::class, 'create'])->name('instructors.create');
Route::post('/instructors',  [InstructorController::class, 'store'])->name('instructors.store');
Route::get('/instructors/{id}/edit',  [InstructorController::class, 'edit'])->name('instructors.edit');
Route::put('/instructors/{id}',  [InstructorController::class, 'update'])->name('instructors.update');
Route::get('/instructors/{id}',  [InstructorController::class, 'destroy'])->name('instructors.destroy');
