import { Navbar } from "react-bootstrap"

const ToggleButton = (isOpen, toggle) => (
  <Navbar.Toggle
    onClick={toggle}
    aria-expanded={isOpen}
    aria-label="Toggle navigation"
  />
)

export default ToggleButton
