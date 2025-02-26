import { useState, useEffect } from "react"
import { Form, Button, Row, Col, Card } from "react-bootstrap"
import { jwtDecode } from "jwt-decode" // To decode the JWT token
import axiosInstance from "@/utils/axiosInstance"

const EditUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    phone: "",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [successMessage, setSuccessMessage] = useState("")
  const [passwordSuccessMessage, setPasswordSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  // Fetch user data from the database when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token")
      if (!token) return setError("No token found, please log in again.")

      try {
        const decoded = jwtDecode(token) // Decode the token to extract user ID
        const userId = decoded.id
        setLoading(true)

        const res = await axiosInstance.get(`/users/${userId}`) // Replace with your backend endpoint
        setUserData(res.data) // Populate the form with user data
        setLoading(false)
      } catch (err) {
        setError(err.response?.data?.msg || "Failed to fetch user data. " + err)
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  // Handle form input changes for user profile
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form input changes for password fields
  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
  }

  // Save profile changes to the database
  const handleSaveChanges = async () => {
    const token = localStorage.getItem("token")
    if (!token) return setError("No token found, please log in again.")

    try {
      const decoded = jwtDecode(token)
      const userId = decoded.id

      await axiosInstance.put(`/users/${userId}`, userData)
      setSuccessMessage("Profile updated successfully!")
      setError("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("")
      }, 3000)
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to save changes. " + err)
    }
  }

  // Update password separately
  const handleUpdatePassword = async () => {
    // Reset messages
    setPasswordError("")
    setPasswordSuccessMessage("")

    // Basic validation
    if (!passwordData.currentPassword) {
      return setPasswordError("Current password is required")
    }

    if (!passwordData.newPassword) {
      return setPasswordError("New password is required")
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return setPasswordError("New passwords do not match")
    }

    const token = localStorage.getItem("token")
    if (!token) return setPasswordError("No token found, please log in again.")

    try {
      const decoded = jwtDecode(token)
      const userId = decoded.id

      await axiosInstance.put(`/users/${userId}/password`, {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      })

      // Clear password fields
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })

      setPasswordSuccessMessage("Password updated successfully!")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setPasswordSuccessMessage("")
      }, 3000)
    } catch (err) {
      setPasswordError(
        err.response?.data?.msg || "Failed to update password. " + err
      )
    }
  }

  if (loading) return <p>Loading user data...</p>
  if (error) return <p className="text-danger">{error}</p>

  return (
    <div>
      <h2 className="mb-4">Edit Profile</h2>

      {/* Profile Information */}
      <Card className="mb-4">
        <Card.Header>Profile Information</Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col md={6}>
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
              </Col>
              <Col md={6}>
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
              </Col>
            </Row>

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
              <Button
                variant="primary"
                className="my-3"
                onClick={handleSaveChanges}
              >
                Save Profile Changes
              </Button>
              {successMessage && (
                <div className="text-success">{successMessage}</div>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Change Password */}
      <Card>
        <Card.Header>Change Password</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formCurrentPassword" className="mb-3">
              <Form.Label className="text-start w-100">
                Current Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your current password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword" className="mb-3">
              <Form.Label className="text-start w-100">New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your new password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label className="text-start w-100">
                Confirm New Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your new password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <div className="d-flex flex-column align-items-center">
              <Button
                variant="warning"
                className="my-3"
                onClick={handleUpdatePassword}
              >
                Update Password
              </Button>
              {passwordError && (
                <div className="text-danger">{passwordError}</div>
              )}
              {passwordSuccessMessage && (
                <div className="text-success">{passwordSuccessMessage}</div>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default EditUser
