<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ThemeController;

Route::post('/theme/upload', [ThemeController::class, 'upload']);
