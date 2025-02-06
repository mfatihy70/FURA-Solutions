import { useEffect, useState } from "react"
import {
  getPartners,
  editPartner,
  addPartner,
  deletePartner,
} from "@/utils/partners"
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
import { FaTrash, FaPlus } from "react-icons/fa"

const ManagePartners = () => {
  const { t } = useTranslation()
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    getPartners(setPartners, setError, setLoading)
  }, [])

  const handleInputChange = (index, field, value) => {
    const updatedPartners = [...partners]
    updatedPartners[index][field] = value
    setPartners(updatedPartners)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await Promise.all(
        partners.map((partner) => editPartner(partner._id, partner, setError, setLoading))
      )
      alert("Partners updated successfully!")
    } catch (err) {
      alert("Failed to update partners: " + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleAddPartner = async () => {
    const newPartner = {
      name: "New Partner",
      imageUrl: "https://picsum.photos/150",
      link: "#",
    }
    try {
      const addedPartner = await addPartner(newPartner, setError, setSaving)
      setPartners([...partners, addedPartner])
      alert("Partner added successfully!")
    } catch (err) {
      alert("Failed to add partner: " + err.message)
    }
  }

  const handleDeletePartner = async (id) => {
    if (window.confirm("Are you sure you want to delete this partner?")) {
      try {
        await deletePartner(id, setError, setSaving)
        setPartners(partners.filter((partner) => partner._id !== id))
      } catch (err) {
        alert("Failed to delete partner: " + err.message)
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
        <h4>{t("Partners")}</h4>
        <Button variant="success" onClick={handleAddPartner}>
          <FaPlus /> {t("Add Partner")}
        </Button>
      </div>

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

              <Col xs={7} md={8}>
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

              <Col xs={2} className="text-end my-2">
                <Button
                  variant="danger"
                  onClick={() => handleDeletePartner(partner._id)}
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

export default ManagePartners
