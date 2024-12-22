import { Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const Map = () => {
  const { t } = useTranslation()
  return (
    <Col md={6}>
      <h2 className="mb-4">{t("contact.location")}</h2>

      <iframe
        className="w-100"
        style={{ height: "400px" }}
        src="https://maps.google.com/maps?output=embed&amp;q=nef%2022%20atak%C3%B6y&amp;z=10&amp;t=m"
        data-map="JTdCJTIycG9zaXRpb25UeXBlJTIyJTNBJTIybWFwLWFkZHJlc3MlMjIlMkMlMjJhZGRyZXNzJTIyJTNBJTIybmVmJTIwMjIlMjBhdGFrJUMzJUI2eSUyMiUyQyUyMnpvb20lMjIlM0ExMCUyQyUyMnR5cGVJZCUyMiUzQSUyMnJvYWQlMjIlMkMlMjJsYW5nJTIyJTNBbnVsbCUyQyUyMmFwaUtleSUyMiUzQW51bGwlMkMlMjJtYXJrZXJzJTIyJTNBJTVCJTVEJTdE"
      ></iframe>
    </Col>
  )
}

export default Map
