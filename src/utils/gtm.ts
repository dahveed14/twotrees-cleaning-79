// Google Tag Manager Utility Functions
// Replaces direct gtag calls with GTM dataLayer implementation

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

// Push event to dataLayer
function pushToDataLayer(event: string, data: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data
    });
  }
}

// Capture UTM parameters and store them
export function captureUTMParameters() {
  if (typeof window === 'undefined') return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const utmData = {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content')
  };
  
  // Store UTM data in sessionStorage for form submissions
  sessionStorage.setItem('utmData', JSON.stringify(utmData));
  
  // Send UTM data to GTM
  if (utmData.utm_source || utmData.utm_medium || utmData.utm_campaign) {
    pushToDataLayer('utm_capture', {
      utm_source: utmData.utm_source,
      utm_medium: utmData.utm_medium,
      utm_campaign: utmData.utm_campaign,
      utm_term: utmData.utm_term,
      utm_content: utmData.utm_content
    });
  }
}

// Track conversion events
export function trackConversion(action: string, location: string) {
  pushToDataLayer('conversion', {
    event_category: 'Two Trees Cleaning',
    event_label: action,
    location: location,
    value: 1
  });
}

// Track button clicks
export function trackButtonClick(buttonText: string, location: string) {
  pushToDataLayer('cta_click', {
    event_category: 'CTA',
    event_label: buttonText,
    location: location
  });
  trackConversion('Book Cleaning Click', location);
}

// Track phone clicks
export function trackPhoneClick(location: string = 'unknown') {
  pushToDataLayer('phone_click', {
    event_category: 'Contact',
    event_label: 'Phone Number Click',
    location: location
  });
}

// Track form submissions
export function trackFormSubmit(formType: string, location: string = 'unknown') {
  pushToDataLayer('form_submit', {
    event_category: 'Form',
    event_label: formType,
    location: location
  });
}

// Track 404 errors
export function track404Error(pagePath: string) {
  pushToDataLayer('page_error', {
    event_category: 'Error',
    event_label: '404 Page Not Found',
    page_path: pagePath
  });
}

// Track commercial inquiries
export function trackCommercialContact(contactMethod: string, location: string = 'commercial') {
  pushToDataLayer('commercial_contact', {
    event_category: 'Commercial',
    event_label: contactMethod,
    location: location
  });
}

// Track page views with additional data
export function trackPageView(pageTitle: string, pagePath: string, additionalData: Record<string, any> = {}) {
  pushToDataLayer('page_view', {
    page_title: pageTitle,
    page_path: pagePath,
    ...additionalData
  });
}

// Initialize GTM tracking on page load
export function initializeGTM() {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', captureUTMParameters);
  }
}