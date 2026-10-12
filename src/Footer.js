import React, { useEffect, useRef } from 'react';
import './App.css';

function Footer() {
const currentYear = new Date().getFullYear();
  const ref = useRef(null);

  // The footer is fixed to the bottom of the viewport in the AI design, so the
  // page has to know how tall it is to keep its last line clear of it. Measured
  // rather than guessed: the height changes with the breakpoint and with how the
  // copy wraps, and a hardcoded padding-bottom is exactly the magic number this
  // layout has twice been rebuilt to get rid of. If ResizeObserver is missing the
  // CSS fallback in --footer-h takes over.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const publish = () =>
      document.documentElement.style.setProperty('--footer-h', `${el.offsetHeight}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <footer className='footer' ref={ref}>
      <div className='footer-content'>
        <p>&copy; {currentYear}</p>
        <p>dOnT fOrGeT tO lIeK aNd SuBsCrIbE</p>
      </div>
    </footer>
  );
}

export default Footer;
