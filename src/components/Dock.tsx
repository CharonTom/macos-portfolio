import { dockApps } from "../constants";
import { Tooltip } from "react-tooltip";

const Dock = () => {
  const togglApp = (app) => {};

  return (
    <section id="dock">
      <div className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div className="relative flex justify-center" key={id}>
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show="150"
              disabled={!canOpen}
              onClick={() => togglApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
