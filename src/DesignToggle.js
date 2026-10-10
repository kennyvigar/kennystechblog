import './toggle.css';
import { useDesign } from './DesignContext';

const FACES = [
  ['sansmono', 'sans + mono'],
  ['serifmono', 'serif + mono'],
  ['sans', 'all sans'],
];

function Group({ label, name, options, current, set }) {
  return (
    <div className="vc-group">
      <span className="vc-label">{label}</span>
      <div className="vc-buttons">
        {options.map(([value, text]) => (
          <button
            key={value}
            type="button"
            className={`vc-btn${current === value ? ' is-on' : ''}`}
            aria-pressed={current === value}
            onClick={() => set(name, value)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

function DesignToggle() {
  const { design, face, set, toggleDesign } = useDesign();
  const onLegacy = design === 'legacy';

  return (
    <div className="variant-controls">
      <button type="button" className="vc-revert" onClick={toggleDesign} aria-pressed={onLegacy}>
        {onLegacy ? 'back to new design' : 'revert to pre-ai design'}
      </button>

      {/* Variant pickers are scaffolding for choosing a direction.
          Hidden in legacy mode, and they come out once a direction is picked. */}
      {!onLegacy && (
        <div className="vc-panel">
          <Group label="type" name="face" options={FACES} current={face} set={set} />
        </div>
      )}
    </div>
  );
}

export default DesignToggle;
