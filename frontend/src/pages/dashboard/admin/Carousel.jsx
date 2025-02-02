import { useEffect, useState } from "react"
import { fetchCarouselItems, editCarouselItem } from "@/utils/carousel"
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

const EditCarousel = () => {
  const { t } = useTranslation()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchCarouselItems(setItems, setLoading, setError) // ✅ Fetch carousel items
  }, [])

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...items]
    updatedItems[index][field] = value
    setItems(updatedItems)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      // ✅ Send PUT requests for each item
      await Promise.all(items.map((item) => editCarouselItem(item._id, item)))
      alert("Carousel items updated successfully!")
    } catch (err) {
      alert("Failed to update carousel items: " + err.message)
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
        {items.map((item, index) => (
          <ListGroup.Item key={item._id}>
            <Row>
              <Col xs={3} md={2}>
                <Image
                  src={item.imageUrl || "https://via.placeholder.com/100"}
                  thumbnail
                  alt={t(item.title)}
                  style={{ maxHeight: "100px" }}
                />
              </Col>

              <Col xs={9} md={10}>
                <Form.Group className="mb-2">
                  <Form.Label>{t("Title")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={item.title}
                    onChange={(e) =>
                      handleInputChange(index, "title", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>{t("Subtitle")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={item.subtitle || ""}
                    onChange={(e) =>
                      handleInputChange(index, "subtitle", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>{t("Image URL")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={item.imageUrl}
                    onChange={(e) =>
                      handleInputChange(index, "imageUrl", e.target.value)
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

export default EditCarousel
