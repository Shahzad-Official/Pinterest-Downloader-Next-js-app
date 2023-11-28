export default function performHardReload() {
    const userAgent = navigator.userAgent.toLowerCase();
  
    if (userAgent.includes('chrome')) {
      // Chrome
      location.reload();
    } else if (userAgent.includes('firefox')) {
      // Firefox
      location.reload();
    } else if (userAgent.includes('safari')) {
      // Safari
      window.location.replace(window.location.href);
    } else {
      // For other browsers, a simple reload
      location.reload();
    }
  }