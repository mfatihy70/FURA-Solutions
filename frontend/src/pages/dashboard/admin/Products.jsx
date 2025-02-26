import { useEffect, useState } from "react"
import {
  getProducts,
  editProduct,
  addProduct,
  deleteProduct,
} from "@/utils/products"
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

const EditProducts = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    getProducts(setProducts, setError, setLoading)
  }, [])

  const handleInputChange = (index, field, value) => {
    const updatedProducts = [...products]
    updatedProducts[index][field] = value
    setProducts(updatedProducts)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await Promise.all(
        products.map((product) => editProduct(product._id, product, setError, setLoading))
      )
      alert("Products updated successfully!")
    } catch (err) {
      alert("Failed to update products: " + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleAddProduct = async () => {
    const newProduct = {
      name: "New Product",
      price: 0,
      imageUrl: "https://picsum.photos/150",
    }
    try {
      const addedProduct = await addProduct(newProduct, setError, setSaving)
      setProducts([...products, addedProduct])
      alert("Product added successfully!")
    } catch (err) {
      alert("Failed to add product: " + err.message)
    }
  }

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id, setError, setSaving)
        setProducts(products.filter((product) => product._id !== id))
      } catch (err) {
        alert("Failed to delete product: " + err.message)
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
        <h4>{t("Products")}</h4>
        <Button variant="success" onClick={handleAddProduct}>
          <FaPlus /> {t("Add Product")}
        </Button>
      </div>

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

              <Col xs={7} md={8}>
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
                    type="number"
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

              <Col xs={2} className="text-end my-2">
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product._id)}
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

export default EditProducts
