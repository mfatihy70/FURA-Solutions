import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"

const EditUser = () => {
  const [successMessage, setSuccessMessage] = useState("")

  const handleSaveChanges = () => {
    setSuccessMessage("Changes saved successfully!")
  }

  return (
    <Form>
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label className="text-start w-100">Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="formSurname" className="mb-3">
        <Form.Label className="text-start w-100">Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter your surname" />
      </Form.Group>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label className="text-start w-100">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label className="text-start w-100">Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group>
      <Form.Group controlId="formAddress" className="mb-3">
        <Form.Label className="text-start w-100">Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" />
      </Form.Group>
      <Form.Group controlId="formPhone" className="mb-3">
        <Form.Label className="text-start w-100">Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter your phone number" />
      </Form.Group>
      <div className="d-flex flex-column align-items-center">
        <Button variant="primary" className="my-3" onClick={handleSaveChanges}>
          Save Changes
        </Button>
        {successMessage && <div className="text-success">{successMessage}</div>}
      </div>
    </Form>
  )
}

export default EditUser
