import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Container } from "react-bootstrap"

const About = () => {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <h2 className="mb-4">{t("about")}</h2>
      <div className="text-start">
        <p className="lead mb-4">{t("aboutText.first")}</p>
        <p className="lead">{t("aboutText.second")}</p>
      </div>
    </Container>
  )
}

export default About
