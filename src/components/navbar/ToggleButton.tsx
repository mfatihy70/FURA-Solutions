import "/src/styles/ToggleButton.css";

interface ToggleButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const ToggleButton = ({ isOpen, toggle }: ToggleButtonProps) => (
  <button
    className="navbar-toggler"
    type="button"
    onClick={toggle}
    aria-expanded={isOpen}
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
);

export default ToggleButton;
