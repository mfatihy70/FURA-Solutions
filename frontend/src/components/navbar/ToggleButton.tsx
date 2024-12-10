import { Navbar } from "react-bootstrap"

interface ToggleButtonProps {
  isOpen: boolean
  toggle: () => void
}

const ToggleButton = ({ isOpen, toggle }: ToggleButtonProps) => (
  <Navbar.Toggle
    onClick={toggle}
    aria-expanded={isOpen}
    aria-label="Toggle navigation"
  />
)

export default ToggleButton
