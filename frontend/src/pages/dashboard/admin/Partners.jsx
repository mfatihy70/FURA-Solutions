import { useEffect, useState } from "react"
import { fetchPartners, managePartners } from "@/utils/partners"
import {
  ListGroup,
  Form,
  Button,
  Spinner,
  Alert,
  Row,
  Col,
  Image,
} from "react-bootstrap"
import { useTranslation } from "react-i18next"

const ManagePartners = () => {
  const { t } = useTranslation()
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchPartners(setPartners, setLoading, setError) // Fetch partners
  }, [])

  const handleInputChange = (index, field, value) => {
    const updatedPartners = [...partners]
    updatedPartners[index][field] = value
    setPartners(updatedPartners)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      // Send PUT requests for each partner
      await Promise.all(
        partners.map((partner) => managePartners(partner._id, partner))
      )
      alert("Partners updated successfully!")
    } catch (err) {
      alert("Failed to update partners: " + err.message)
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
        {partners.map((partner, index) => (
          <ListGroup.Item key={partner._id}>
            <Row>
              <Col xs={3} md={2}>
                <Image
                  src={partner.imageUrl}
                  thumbnail
                  alt={t(partner.name)}
                  style={{ maxHeight: "100px" }}
                />
              </Col>

              <Col xs={9} md={10}>
                <Form.Group className="mb-2">
                  <Form.Label>{t("Image URL")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={partner.imageUrl}
                    onChange={(e) =>
                      handleInputChange(index, "imageUrl", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>{t("Link")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={partner.link}
                    onChange={(e) =>
                      handleInputChange(index, "link", e.target.value)
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

export default ManagePartners
