# Laravel CMS Backend (Skeleton)

This directory contains a minimal placeholder structure for a Laravel-based CMS backend. It is not a full Laravel installation but provides an idea of the desired structure.

## Setup

1. Ensure you have PHP and Composer installed.
2. In this `backend` directory, run:

   ```bash
   composer install
   ```

3. Configure your `.env` file as needed.
4. Serve the application:

   ```bash
   php -S localhost:8000 -t public
   ```

The `ThemeController` includes a simple `POST /theme/upload` endpoint to demonstrate uploading a theme archive.
