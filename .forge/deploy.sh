#!/bin/bash

cd /home/forge/yourdomain.com

# Pull latest changes
git pull origin main

# Install/update composer dependencies
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# Run database migrations
php artisan migrate --force

# Clear and cache configs
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Install npm dependencies and build assets
npm ci
npm run build

# Clear old cached files
php artisan cache:clear

# Restart queue workers (if using queues)
php artisan queue:restart

# Set proper permissions
chmod -R 755 storage bootstrap/cache
chown -R forge:forge storage bootstrap/cache

echo "Deployment complete!"