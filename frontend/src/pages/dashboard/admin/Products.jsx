import { useEffect, useState } from "react"
import { fetchProducts, editProducts } from "@/utils/products"
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

const EditProducts = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchProducts(setProducts, setLoading, setError) // Fetch products
  }, [])

  const handleInputChange = (index, field, value) => {
    const updatedProducts = [...products]
    updatedProducts[index][field] = value
    setProducts(updatedProducts)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      // Send PUT requests for each product
      await Promise.all(
        products.map((product) => editProducts(product._id, product))
      )
      alert("Products updated successfully!")
    } catch (err) {
      alert("Failed to update products: " + err.message)
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
        {products.map((product, index) => (
          <ListGroup.Item key={product._id}>
            <Row>
              <Col xs={3} md={2}>
                <Image
                  src={product.imageUrl}
                  thumbnail
                  alt={t(product.name)}
                  style={{ maxHeight: "100px" }}
                />
              </Col>

              <Col xs={9} md={10}>
                <Form.Group className="mb-2">
                  <Form.Label>{t("Name")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={product.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>{t("Price")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={product.price}
                    onChange={(e) =>
                      handleInputChange(index, "price", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>{t("Image URL")}</Form.Label>
                  <Form.Control
                    type="text"
                    value={product.imageUrl}
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

export default EditProducts
