<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ThemeController extends Controller
{
    /**
     * Handle theme upload (placeholder implementation).
     */
    public function upload(Request $request): Response
    {
        $theme = $request->file('theme');
        if ($theme) {
            $path = storage_path('themes');
            if (!is_dir($path)) {
                mkdir($path, 0755, true);
            }
            $theme->move($path, $theme->getClientOriginalName());
            return response()->json(['status' => 'uploaded']);
        }
        return response()->json(['error' => 'no file provided'], 400);
    }
}
