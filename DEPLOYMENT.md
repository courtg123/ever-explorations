# Deployment Guide - Ever Explorations

## Laravel Forge Setup

### 1. Server Configuration
1. Log into Laravel Forge
2. Create a new server or use existing one
3. Note your server's IP address

### 2. Site Configuration
1. Click "New Site" in Forge
2. Enter your domain name from GoDaddy
3. Set Project Type to "Laravel"
4. Set Web Directory to `/public`
5. Create the site

### 3. Repository Setup
1. In the site's dashboard, go to "Git Repository"
2. Provider: GitHub
3. Repository: `courtg123/ever-explorations`
4. Branch: `main`
5. Check "Install Composer Dependencies"

### 4. Environment Configuration
1. Go to "Environment" tab
2. Update these values:
   - `APP_NAME="Ever Explorations"`
   - `APP_ENV=production`
   - `APP_URL=https://yourdomain.com` (replace with your actual domain)
   - `APP_DEBUG=false`
3. Click "Save"

### 5. Deployment Script
1. Go to "Deployments" tab
2. Replace the deployment script with the contents of `.forge/deploy.sh`
3. Click "Save"

### 6. Database Setup
1. If using MySQL (recommended for production):
   - Create a database in Forge
   - Update `.env` with database credentials:
     ```
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=your_db_name
     DB_USERNAME=forge
     DB_PASSWORD=your_db_password
     ```

### 7. SSL Certificate
1. In the site dashboard, go to "SSL"
2. Use "Let's Encrypt" for free SSL
3. Click "Obtain Certificate"

### 8. Deploy
1. Click "Deploy Now" button
2. Check deployment log for any errors

## GoDaddy DNS Configuration

### For root domain (example.com):
1. Log into GoDaddy
2. Go to DNS Management for your domain
3. Add/Edit A Record:
   - Type: A
   - Name: @
   - Value: [Your Forge Server IP]
   - TTL: 600 seconds

### For www subdomain (www.example.com):
1. Add CNAME Record:
   - Type: CNAME
   - Name: www
   - Value: example.com
   - TTL: 600 seconds

### DNS Propagation
- Changes may take 5-30 minutes to propagate
- You can check status at: https://www.whatsmydns.net/

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] SSL certificate is active (https:// works)
- [ ] Database migrations ran successfully
- [ ] Assets are loading (CSS/JS)
- [ ] Email capture form works
- [ ] All pages are accessible

## Troubleshooting

### If site shows 500 error:
1. Check Laravel logs: `storage/logs/laravel.log`
2. Ensure APP_KEY is generated: `php artisan key:generate`
3. Check file permissions

### If assets aren't loading:
1. Run `npm run build` manually
2. Clear cache: `php artisan cache:clear`

### If database errors:
1. Verify database credentials in .env
2. Run migrations: `php artisan migrate`