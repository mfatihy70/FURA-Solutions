import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { FaTrash, FaPlus } from "react-icons/fa"
import {
  getCarouselItems,
  editCarouselItem,
  addCarouselItem,
  deleteCarouselItem,
} from "@/utils/carousel"
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

const EditCarousel = () => {
  const { t } = useTranslation()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    getCarouselItems(setItems, setError, setLoading)
  }, [])

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...items]
    updatedItems[index][field] = value
    setItems(updatedItems)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await Promise.all(
        items.map((item) =>
          editCarouselItem(item._id, item, setError, setSaving)
        )
      )
      alert("Carousel items updated successfully!")
    } catch (err) {
      alert("Failed to update carousel items: " + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleAddItem = async () => {
    const newItem = {
      title: "New Title",
      subtitle: "New Subtitle",
      imageUrl: "https://picsum.photos/150",
    }

    try {
      const addedItem = await addCarouselItem(newItem, setError, setSaving)
      setItems([...items, addedItem])
      alert("Item added successfully!")
    } catch (err) {
      alert("Failed to add item: " + err.message)
    }
  }

  const handleDeleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteCarouselItem(id, setError, setSaving)
        setItems(items.filter((item) => item._id !== id))
      } catch (err) {
        alert("Failed to delete item: " + err.message)
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
        <h4>{t("Carousel Items")}</h4>
        <Button variant="success" onClick={handleAddItem}>
          <FaPlus /> {t("Add New Item")}
        </Button>
      </div>

      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item key={item._id}>
            <Row className="align-items-center">
              <Col xs={3} md={2}>
                <Image
                  src={item.imageUrl || "https://picsum.photos/150"}
                  thumbnail
                  alt={t(item.title)}
                  style={{ maxHeight: "100px" }}
                />
              </Col>

              <Col xs={7} md={9}>
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

              <Col xs={2} className="text-end my-2">
                <Button
                  variant="danger"
                  onClick={() => handleDeleteItem(item._id)}
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

export default EditCarousel
