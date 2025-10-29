
interface MetaTagsConfig {
  title: string;
  description: string;
  cityName?: string;
  cityCoordinates?: {
    latitude: string;
    longitude: string;
  };
  url: string;
  image?: string;
  keywords?: string[];
}

export const updateMetaTags = (config: MetaTagsConfig) => {
  if (typeof document === 'undefined') return;
  
  const { title, description, cityName, cityCoordinates, url, image, keywords } = config;
  
  // Update title
  document.title = title;
  
  // Helper function to update or create meta tag
  const updateMetaTag = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  // Basic meta tags
  updateMetaTag('description', description);
  updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  updateMetaTag('robots', 'index, follow');
  updateMetaTag('author', 'Two Trees Cleaning');
  
  // Keywords if provided
  if (keywords && keywords.length > 0) {
    updateMetaTag('keywords', keywords.join(', '));
  }

  // Geographic meta tags for city pages
  if (cityName && cityCoordinates) {
    updateMetaTag('geo.region', 'US-CA');
    updateMetaTag('geo.placename', `${cityName}, California`);
    updateMetaTag('geo.position', `${cityCoordinates.latitude};${cityCoordinates.longitude}`);
    updateMetaTag('ICBM', `${cityCoordinates.latitude}, ${cityCoordinates.longitude}`);
  }

  // Open Graph tags
  updateMetaTag('og:title', title, true);
  updateMetaTag('og:description', description, true);
  updateMetaTag('og:url', url, true);
  updateMetaTag('og:type', 'website', true);
  updateMetaTag('og:site_name', 'Two Trees Cleaning', true);
  updateMetaTag('og:locale', 'en_US', true);
  
  if (image) {
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', `Two Trees Cleaning ${cityName ? `- ${cityName}` : ''} House Cleaning Services`, true);
  }

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', title);
  updateMetaTag('twitter:description', description);
  updateMetaTag('twitter:site', '@twotreescleaning');
  
  if (image) {
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', `Two Trees Cleaning ${cityName ? `- ${cityName}` : ''} House Cleaning Services`);
  }

  // Business-specific meta tags
  updateMetaTag('business:contact_data:phone_number', '805-456-1421');
  updateMetaTag('business:contact_data:email', 'hello@twotreescleaning.com');
  updateMetaTag('business:contact_data:region', 'CA');
  updateMetaTag('business:contact_data:country_name', 'United States');

  // Add hreflang for better geographic targeting
  updateMetaTag('hreflang', 'en-US', true);

  // Mobile optimization tags
  updateMetaTag('mobile-web-app-capable', 'yes');
  updateMetaTag('apple-mobile-web-app-capable', 'yes');
  updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
  updateMetaTag('theme-color', '#0d483f'); // Two Trees Green
  updateMetaTag('msapplication-navbutton-color', '#0d483f');
  updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

  // Performance hints
  updateMetaTag('dns-prefetch', 'https://fonts.googleapis.com');
  updateMetaTag('dns-prefetch', 'https://fonts.gstatic.com');
  updateMetaTag('dns-prefetch', 'https://www.googletagmanager.com');
  updateMetaTag('preconnect', 'https://fonts.gstatic.com');

  // Update canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', url);
};

export const generateCityKeywords = (cityName: string): string[] => {
  const baseKeywords = [
    'house cleaning',
    'home cleaning service',
    'residential cleaning',
    'maid service',
    'cleaning company',
    'deep cleaning',
    'move in cleaning',
    'move out cleaning',
    'post construction cleaning',
    'licensed cleaning service',
    'insured cleaning service',
    'eco friendly cleaning',
    'green cleaning products'
  ];

  const cityKeywords = baseKeywords.map(keyword => `${keyword} ${cityName}`);
  const locationKeywords = [
    `${cityName} house cleaning`,
    `${cityName} cleaning service`,
    `${cityName} maid service`,
    `cleaning service near ${cityName}`,
    `house cleaners in ${cityName}`,
    `${cityName} residential cleaning`,
    `${cityName} CA cleaning service`,
    `professional cleaners ${cityName}`,
    `trusted cleaning ${cityName}`,
    `best cleaning service ${cityName}`
  ];

  return [...cityKeywords, ...locationKeywords];
};
