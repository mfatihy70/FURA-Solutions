import { useTranslation } from "react-i18next"
import { Container } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const Section = () => {
  const { t } = useTranslation()
  const { lang } = useParams()
  const { i18n } = useTranslation()

  // Ensure we have a language, fallback to current i18n language
  const currentLang = lang || i18n.language

  return (
    <Link to={`/${currentLang}/about`} style={{ textDecoration: "none" }}>
      <Container
        fluid
        className="my-5 p-5"
        style={{ backgroundColor: "#07416b", cursor: "pointer" }}
      >
        <h4 className="display-6 text-white mb-4">{t("about")}</h4>
        <p className="text-white text-justify fs-6">{t("aboutText.first")}</p>
        <p className="text-white text-justify fs-6">{t("aboutText.second")}</p>
      </Container>
    </Link>
  )
}

export default Section
