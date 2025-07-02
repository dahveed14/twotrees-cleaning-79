# Server Configuration Examples for XML MIME Types

## Apache (.htaccess)
```apache
# Ensure XML files are served with correct MIME type
<Files "*.xml">
    Header set Content-Type "application/xml; charset=utf-8"
    Header set Cache-Control "public, max-age=3600"
</Files>

# Specific sitemap configuration
<Files "sitemap.xml">
    Header set Content-Type "application/xml; charset=utf-8"
    Header set Cache-Control "public, max-age=3600"
</Files>
```

## Nginx
```nginx
# In your server block
location ~* \.xml$ {
    add_header Content-Type "application/xml; charset=utf-8";
    add_header Cache-Control "public, max-age=3600";
    expires 1h;
}

# Specific sitemap location
location = /sitemap.xml {
    add_header Content-Type "application/xml; charset=utf-8";
    add_header Cache-Control "public, max-age=3600";
    expires 1h;
}
```

## Node.js/Express
```javascript
app.get('/sitemap.xml', (req, res) => {
  res.set({
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=3600'
  });
  // Serve your sitemap content
});
```