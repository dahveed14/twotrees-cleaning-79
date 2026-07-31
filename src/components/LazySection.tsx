import { useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  rootMargin?: string;
  className?: string;
}

export const LazySection = ({
  children,
  rootMargin = "50px",
  className = ""
}: LazySectionProps) => {
  // Starts true so content is present during server rendering (crawlers only
  // read the static HTML) and on the client's first paint, matching the SSR
  // output to avoid a hydration mismatch. useEffect below never runs during
  // SSR, so a `false` default here would mean this content is never in the
  // static HTML at all.
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div className="h-96" />}
    </div>
  );
};