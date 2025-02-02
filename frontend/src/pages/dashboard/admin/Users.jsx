import { useEffect, useState } from "react"
import { fetchUsers, manageUsers } from "@/utils/users"
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

const ManageUsers = () => {
  const { t } = useTranslation()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchUsers(setUsers, setLoading, setError) // Fetch users
  }, [])

  const handleInputChange = (index, field, value) => {
    const updatedUsers = [...users]
    updatedUsers[index][field] = value
    setUsers(updatedUsers)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      // Send PUT requests for each user
      await Promise.all(users.map((user) => manageUsers(user._id, user)))
      alert("Users updated successfully!")
    } catch (err) {
      alert("Failed to update users: " + err.message)
    } finally {
      setSaving(false)
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
      <ListGroup>
        {users.map((user, index) => (
          <ListGroup.Item key={user._id}>
            <Row>
              <Col xs={12}>
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

                <Form.Group className="mb-2">
                  <Form.Label>{t("Is Admin")}</Form.Label>
                  <Form.Check
                    type="switch"
                    checked={user.isAdmin}
                    onChange={(e) =>
                      handleInputChange(index, "isAdmin", e.target.checked)
                    }
                  />
                </Form.Group>
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
