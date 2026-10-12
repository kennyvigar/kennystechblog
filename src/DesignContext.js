import { createContext, useContext, useEffect, useState } from 'react';

const DesignContext = createContext({});

// Three independent switches, all driven by data-* attributes on <html>:
//   design  ai | legacy                      the pre-AI toggle
//   face    sansmono | serifmono | sans       type treatment, still being chosen
//   photo   tight | roomy | stock             how photos sit at phone width
// The playful device is settled: polaroid. It is the design now, not a switch.
//
// `photo` only does anything below 760px. tight and roomy are the same layout at
// two sizes: the polaroid floats beside the lede on Home, and the page photo sits
// on the baseline beside the page title everywhere else. stock is the layout that
// shipped on 2026-10-10, kept so the two can be compared on a real phone. It comes
// out with the type picker once a size is chosen.
const KEYS = { design: 'ktb-design', face: 'ktb-face', photo: 'ktb-photo' };
const DEFAULTS = { design: 'ai', face: 'sansmono', photo: 'tight' };
const ALLOWED = {
  design: ['ai', 'legacy'],
  face: ['sansmono', 'serifmono', 'sans'],
  photo: ['tight', 'roomy', 'stock'],
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
    photo: read('photo'),
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
