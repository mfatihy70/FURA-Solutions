import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { jwtDecode } from "jwt-decode" // To decode the JWT token
import axios from "axios"

const EditUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  })
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Fetch user data from the database when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token")
      if (!token) return setError("No token found, please log in again.")

      try {
        const decoded = jwtDecode(token) // Decode the token to extract user ID
        const userId = decoded.id
        setLoading(true)

        const res = await axios.get(`http://localhost:5000/api/users/${userId}`) // Replace with your backend endpoint
        setUserData(res.data) // Populate the form with user data
        setLoading(false)
      } catch (err) {
        setError(err.response?.data?.msg || "Failed to fetch user data. " + err)
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  // Save changes to the database
  const handleSaveChanges = async () => {
    const token = localStorage.getItem("token")
    if (!token) return setError("No token found, please log in again.")

    try {
      const decoded = jwtDecode(token)
      const userId = decoded.id

      await axios.put(`http://localhost:5000/api/users/${userId}`, userData) // Replace with your backend endpoint
      setSuccessMessage("Changes saved successfully!")
      setError("")
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to save changes. " + err)
    }
  }

  if (loading) return <p>Loading user data...</p>
  if (error) return <p className="text-danger">{error}</p>

  return (
    <Form>
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label className="text-start w-100">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formSurname" className="mb-3">
        <Form.Label className="text-start w-100">Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your surname"
          name="surname"
          value={userData.surname}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label className="text-start w-100">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label className="text-start w-100">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formAddress" className="mb-3">
        <Form.Label className="text-start w-100">Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your address"
          name="address"
          value={userData.address}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formPhone" className="mb-3">
        <Form.Label className="text-start w-100">Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your phone number"
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
        />
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
