import { useEffect, useState } from "react"
import { getUsers, editUser, deleteUser } from "@/utils/auth"
import {
  ListGroup,
  Form,
  Button,
  Spinner,
  Alert,
  Row,
  Col,
} from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { FaTrash } from "react-icons/fa"

const ManageUsers = () => {
  const { t } = useTranslation()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    getUsers(setUsers, setLoading, setError)
  }, [])

  const handleInputChange = (index, field, value) => {
    const updatedUsers = [...users]
    updatedUsers[index][field] = value
    setUsers(updatedUsers)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await Promise.all(
        users.map((user) => editUser(user._id, user, setError, setLoading))
      )
      alert("Users updated successfully!")
    } catch (err) {
      alert("Failed to update users: " + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id, setError, setSaving)
        setUsers(users.filter((user) => user._id !== id))
      } catch (err) {
        alert("Failed to delete user: " + err.message)
      }
    }
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-start min-vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="d-flex justify-content-between mb-3">
        <h4>Manage Users</h4>
      </div>

      <ListGroup>
        {users.map((user, index) => (
          <ListGroup.Item key={user._id}>
            <Row>
              <Col xs={10}>
                <Form.Group className="mb-2">
                  <Form.Label>{t("Name")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={user.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>{t("Email")}</Form.Label>
                  <Form.Control
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      handleInputChange(index, "email", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Check
                  type="switch"
                  label={t("Is Admin")}
                  checked={user.isAdmin}
                  onChange={(e) =>
                    handleInputChange(index, "isAdmin", e.target.checked)
                  }
                />
              </Col>

              <Col xs={2} className="text-end my-2">
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  <FaTrash />
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="d-flex justify-content-center mt-3">
        <Button variant="primary" onClick={handleSave} disabled={saving}>
          {saving ? t("Saving...") : t("Save Changes")}
        </Button>
      </div>
    </div>
  )
}

export default ManageUsers
