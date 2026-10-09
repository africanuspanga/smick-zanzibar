# SMICK Tours & Safaris - cPanel Deployment Guide

This guide will help you deploy the SMICK Tours & Safaris website as static HTML files to your cPanel hosting.

## Prerequisites

- Node.js 20.9+ and pnpm (`corepack enable`) installed on your local machine or server
- Git installed
- Access to your cPanel hosting account
- SSH access (optional, but recommended)

## Step 1: Clone the Repository

```bash
git clone https://github.com/africanuspanga/smick-zanzibar.git
cd smick-zanzibar
```


## Step 2: Install Dependencies

```bash
pnpm install
```

This will install all required packages including Next.js, React, and other dependencies.

## Step 3: Build the Static Site

```bash
pnpm build
```

This command will:
- Compile your Next.js application
- Generate static HTML, CSS, and JavaScript files
- Create an `out` directory with all the production files

The build process may take 2-5 minutes depending on your machine.

## Step 4: Locate the Output Files

After the build completes, you'll find all the static files in the `out` directory at the root of your project.

```
out/
├── index.html
├── about.html
├── contact.html
├── _next/
│   ├── static/
│   └── ...
├── images/
└── ...
```

## Step 5: Upload to cPanel

### Option A: Using cPanel File Manager (Recommended for beginners)

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to the `public_html` directory (or your domain's root directory)
4. Delete any existing files (if starting fresh)
5. Click **Upload** and select all files from the `out` directory
6. Upload all files and folders, maintaining the directory structure

### Option B: Using FTP Client (FileZilla, Cyberduck, etc.)

1. Connect to your hosting via FTP using your cPanel credentials
2. Navigate to the `public_html` directory
3. Upload all contents from the `out` folder to `public_html`
4. Ensure the directory structure is preserved

### Option C: Using SSH (Fastest method)

```bash
# Connect to your server
ssh username@your-server.com

# Navigate to public_html
cd public_html

# Remove old files (if needed)
rm -rf *

# Upload using rsync or scp from your local machine
rsync -avz out/ username@your-server.com:~/public_html/
```

## Step 6: .htaccess (included automatically)

`public/.htaccess` is copied into `out/` on every build, so it is uploaded with the site. It:

- forces HTTPS and redirects `www.` to `https://smickzanzibar.com`
- serves clean URLs (`/about` → `about.html`) and the custom 404 page
- disables directory listing
- sets security headers (HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, nosniff)
- enables compression and long-term caching for static assets

Make sure hidden files are uploaded (some FTP clients skip dotfiles). Turn on SSL in cPanel (AutoSSL / Let's Encrypt) before going live, because the file forces HTTPS.

## Optional: Google Analytics

Build with a GA4 measurement ID to enable analytics. It only loads after a visitor accepts the cookie banner; without an ID the site sets no cookies.

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX pnpm build
```
