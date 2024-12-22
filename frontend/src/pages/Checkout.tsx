import { useTranslation } from "react-i18next"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
const Checkout = () => {
  const { t } = useTranslation()
  const { lang } = useParams()

  return (
    <Container className="min-vh-100">
      <h1>{t("checkout.title")}</h1>
      <p>(In development)</p>
      <Link to={`/${lang}/cart`} className="btn btn-primary mt-4">
        {t("checkout.backToCart")}
      </Link>
    </Container>
  )
}

export default Checkout
