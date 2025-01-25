import { useTranslation } from "react-i18next"
import { Container } from "react-bootstrap"

const Section = () => {
  const { t } = useTranslation()

  return (
    <Container
      fluid
      className="my-5 p-5"
      style={{ backgroundColor: "#07416b" }}
    >
      <h4 className="display-6 text-white mb-4">{t("about")}</h4>
      <p className="text-white text-justify fs-6">{t("aboutText.first")}</p>
      <p className="text-white text-justify fs-6">{t("aboutText.second")}</p>
    </Container>
  )
}

export default Section
