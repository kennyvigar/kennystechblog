import './toggle.css';
import { useDesign } from './DesignContext';

// The revert button is the whole control surface now.
//
// Underneath it there used to be a panel of variant pickers: type treatment, and
// later the phone photo sizing. Those were scaffolding for making a decision, and
// DESIGN_SPEC said they come out once a direction is picked. Both are picked, so
// they are gone and the choices live in ai.css.
//
// The revert button itself is not scaffolding. It is the one piece of honest
// evidence on the site, and it stays in both designs, because hiding it in legacy
// would leave no way back.
function DesignToggle() {
  const { design, toggleDesign } = useDesign();
  const onLegacy = design === 'legacy';

  return (
    <div className="variant-controls">
      <button type="button" className="vc-revert" onClick={toggleDesign} aria-pressed={onLegacy}>
        {onLegacy ? 'back to new design' : 'revert to pre-ai design'}
      </button>
    </div>
  );
}

export default DesignToggle;
