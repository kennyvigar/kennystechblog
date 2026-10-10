import { createContext, useContext, useEffect, useState } from 'react';

const DesignContext = createContext({});

// Three independent switches, all driven by data-* attributes on <html>:
//   design  ai | legacy                   the pre-AI toggle
//   face    sansmono | serifmono | sans    type treatment, still being chosen
// The playful device is settled: polaroid. It is the design now, not a switch.
const KEYS = { design: 'ktb-design', face: 'ktb-face' };
const DEFAULTS = { design: 'ai', face: 'sansmono' };
const ALLOWED = {
  design: ['ai', 'legacy'],
  face: ['sansmono', 'serifmono', 'sans'],
};

const read = (k) => {
  try {
    const v = localStorage.getItem(KEYS[k]);
    return ALLOWED[k].includes(v) ? v : DEFAULTS[k];
  } catch {
    return DEFAULTS[k];
  }
};

export function DesignProvider({ children }) {
  const [state, setState] = useState(() => ({
    design: read('design'),
    face: read('face'),
  }));

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(state).forEach(([k, v]) => {
      root.setAttribute(`data-${k}`, v);
      try {
        localStorage.setItem(KEYS[k], v);
      } catch {
        /* blocked storage: the attribute above still works */
      }
    });
  }, [state]);

  const set = (k, v) => setState((s) => ({ ...s, [k]: v }));
  const toggleDesign = () =>
    setState((s) => ({ ...s, design: s.design === 'ai' ? 'legacy' : 'ai' }));

  return (
    <DesignContext.Provider value={{ ...state, set, toggleDesign }}>
      {children}
    </DesignContext.Provider>
  );
}

export const useDesign = () => useContext(DesignContext);
