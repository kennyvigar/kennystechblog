import { createContext, useContext, useEffect, useState } from 'react';

const DesignContext = createContext({});

// One switch, driven by a data-* attribute on <html>:
//   design  ai | legacy    the pre-AI toggle
//
// There used to be two more. `face` chose the type treatment and `photo` chose
// how photos sat at phone width, and both were live switchers only because a
// direction had not been picked yet. Both are picked: sans + mono, and the tight
// photo sizes. They are the design now, not options, so they live in ai.css and
// the switches are gone. The playful device settled the same way, to the polaroid.
//
// Old `ktb-face` and `ktb-photo` values may still sit in a returning visitor's
// localStorage. Nothing reads them, and nothing writes data-face or data-photo
// any more, so they are inert.
const KEY = 'ktb-design';
const DEFAULT = 'ai';
const ALLOWED = ['ai', 'legacy'];

const read = () => {
  try {
    const v = localStorage.getItem(KEY);
    return ALLOWED.includes(v) ? v : DEFAULT;
  } catch {
    return DEFAULT;
  }
};

export function DesignProvider({ children }) {
  const [design, setDesign] = useState(read);

  useEffect(() => {
    document.documentElement.setAttribute('data-design', design);
    try {
      localStorage.setItem(KEY, design);
    } catch {
      /* blocked storage: the attribute above still works */
    }
  }, [design]);

  const toggleDesign = () => setDesign((d) => (d === 'ai' ? 'legacy' : 'ai'));

  return (
    <DesignContext.Provider value={{ design, toggleDesign }}>
      {children}
    </DesignContext.Provider>
  );
}

export const useDesign = () => useContext(DesignContext);
