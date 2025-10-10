import { useEffect, useRef } from "react";

// Declare custom Google Maps Extended Component Library elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmpx-api-loader': {
        'api-key'?: string;
        'solution-channel'?: string;
      };
      'gmpx-store-locator': {
        'map-id'?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

interface GoogleMapLocatorProps {
  title?: string;
  subtitle?: string;
}

export const GoogleMapLocator = ({ 
  title = "Visit Us or Service Your Area",
  subtitle = "Located in Ventura County, serving families across Santa Barbara and Ventura Counties"
}: GoogleMapLocatorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;

    const CONFIGURATION = {
      locations: [
        {
          title: "Two Trees Cleaning",
          address1: "2252 Channel Dr",
          address2: "Ventura, CA 93003, USA",
          coords: { lat: 34.2686019, lng: -119.2689508 },
          placeId: "ChIJu4j5t6sASQARPfEuLicUNA4"
        }
      ],
      mapOptions: {
        center: { lat: 34.2686019, lng: -119.2689508 },
        fullscreenControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        zoom: 10,
        zoomControl: true,
        maxZoom: 17
      },
      mapsApiKey: "AIzaSyC1xjAt6WIFIjN_dF5CQqvmJyvDbPSZGy8",
      capabilities: {
        input: true,
        autocomplete: true,
        directions: false,
        distanceMatrix: true,
        details: false,
        actions: false
      }
    };

    const initializeMap = async () => {
      try {
        // Load the Extended Component Library
        if (!document.querySelector('script[src*="extended-component-library"]')) {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = 'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js';
          document.body.appendChild(script);
          
          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }

        // Wait for custom element to be defined
        await customElements.whenDefined('gmpx-store-locator');
        
        const locator = containerRef.current?.querySelector('gmpx-store-locator');
        if (locator && typeof (locator as any).configureFromQuickBuilder === 'function') {
          (locator as any).configureFromQuickBuilder(CONFIGURATION);
          isInitialized.current = true;
          console.log('Google Maps Store Locator initialized successfully');
        }
      } catch (error) {
        console.error('Failed to initialize Google Maps Store Locator:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeMap, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ minHeight: '500px' }}
        >
          <gmpx-api-loader 
            api-key="AIzaSyC1xjAt6WIFIjN_dF5CQqvmJyvDbPSZGy8" 
            solution-channel="GMP_QB_locatorplus_v11_cF"
          />
          <gmpx-store-locator
            style={{
              width: '100%',
              height: '500px',
              '--gmpx-color-surface': '#fff',
              '--gmpx-color-on-surface': '#212121',
              '--gmpx-color-on-surface-variant': '#757575',
              '--gmpx-color-primary': '#0d483f',
              '--gmpx-color-outline': '#e0e0e0',
              '--gmpx-fixed-panel-width-row-layout': '28.5em',
              '--gmpx-fixed-panel-height-column-layout': '65%',
              '--gmpx-font-family-base': 'Inter, sans-serif',
              '--gmpx-font-family-headings': 'Inter, sans-serif',
              '--gmpx-font-size-base': '0.875rem',
              '--gmpx-hours-color-open': '#188038',
              '--gmpx-hours-color-closed': '#d50000',
              '--gmpx-rating-color': '#d4af37',
              '--gmpx-rating-color-empty': '#e0e0e0'
            } as any}
          />
        </div>
      </div>
    </section>
  );
};
