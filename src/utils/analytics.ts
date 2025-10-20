// Analytics utility for GTM dataLayer tracking
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: eventName,
      ...eventData
    });
  }
};

export const trackPhoneClick = (page: string) => {
  trackEvent('phone_click', { page });
};

export const trackBookingClick = (location: string) => {
  trackEvent('booking_click', { location });
};

export const trackFormSubmit = (formType: string) => {
  trackEvent('form_submit', { form_type: formType });
};

export const trackPageView = (pageTitle: string, pageLocation?: string) => {
  if (typeof window === 'undefined') return;
  trackEvent('page_view', { 
    page_title: pageTitle,
    page_location: pageLocation || (typeof window !== 'undefined' ? window.location.href : '')
  });
};

export const trackConversion = (conversionType: string, value: number = 1) => {
  trackEvent('conversion', { 
    conversion_type: conversionType,
    conversion_value: value
  });
};

// Additional tracking functions for specific events
export const track404Error = (pageLocation: string) => {
  trackEvent('404_error', { page_location: pageLocation });
};

export const trackReviewsView = (page: string) => {
  trackEvent('view_reviews', { page });
};