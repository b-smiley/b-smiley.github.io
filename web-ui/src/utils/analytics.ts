import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { Cookies } from "react-cookie-consent";

/**
 * Initializes Google Analytics
 * Should only be called once and called once the user has accepted the cookie policy
 */
const initializeReactGA = () => {
  ReactGA.initialize("G-MWMM6L80KH");
  ReactGA.set({ anonymizeIp: true });
};

/**
 * Handles the user accepting the cookie policy
 */
const handleAcceptCookie = () => {
  initializeReactGA();
  _logPageView();
};

/**
 * Logs a page view with the current URL
 */
const _logPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};

/**
 * Component to track page views if and only if the user has accepted the cookie policy.
 */
function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    if (Cookies.get("CookieConsent")) {
      _logPageView();
    }
  }, [location]);
  return null;
}
export { initializeReactGA, handleAcceptCookie, AnalyticsTracker };
