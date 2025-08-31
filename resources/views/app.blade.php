<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ever Explorations</title>
    
    <!-- Open Graph / Social Media Meta Tags -->
    <meta property="og:title" content="Ever Explorations">
    <meta property="og:description" content="A digital workshop where curiosity leads. Home of Ever e.1, the infinite digital workspace.">
    <meta property="og:image" content="{{ request()->getSchemeAndHttpHost() }}/images/screenshots/e1-infinite-canvas_cropped.png">
    <meta property="og:image:secure_url" content="{{ request()->getSchemeAndHttpHost() }}/images/screenshots/e1-infinite-canvas_cropped.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="{{ request()->getSchemeAndHttpHost() }}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Ever Explorations">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Ever Explorations">
    <meta name="twitter:description" content="A digital workshop where curiosity leads. Home of Ever e.1, the infinite digital workspace.">
    <meta name="twitter:image" content="{{ request()->getSchemeAndHttpHost() }}/images/screenshots/e1-infinite-canvas_cropped.png">
    
    <!-- Additional SEO Meta Tags -->
    <meta name="description" content="A digital workshop where curiosity leads. Home of Ever e.1, the infinite digital workspace.">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/images/planetsicon.png">
    <link rel="apple-touch-icon" href="/images/planetsicon.png">
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1N4CQKCK9H"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-1N4CQKCK9H');
    </script>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Ubuntu+Mono:wght@400;700&family=Forum&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/modern-styles.css') }}">
    <link rel="stylesheet" href="{{ asset('css/mobile-header.css') }}">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
</head>
<body>
    <div id="app"></div>
</body>
</html>