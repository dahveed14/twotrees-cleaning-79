import { useEffect } from "react";

const WIDGET_SCRIPT = "https://links.twotreescleaning.com/reputation/assets/review-widget.js";
const WIDGET_URL = "https://links.twotreescleaning.com/reputation/widgets/review_widget/ntG4xxs61YZCKPtne4SP";

// Live Google reviews from the GHL reputation widget. The script resizes the iframe.
export const GoogleReviewsWidget = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = WIDGET_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      className="lc_reviews_widget"
      src={WIDGET_URL}
      frameBorder="0"
      scrolling="no"
      loading="lazy"
      style={{ minWidth: "100%", width: "100%", minHeight: "500px" }}
      title="Two Trees Cleaning Google Reviews"
    />
  );
};
