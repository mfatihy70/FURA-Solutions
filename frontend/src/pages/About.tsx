import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

const About = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <Container className="flex-grow-1 my-4">
        <h2 className="mb-4">{t("about")}</h2>
        <div className="text-start">
          <p className="lead mb-4">{t("aboutText.first")}</p>
          <p className="lead">{t("aboutText.second")}</p>
        </div>
      </Container>
      <Footer />
    </Container>
  );
};

export default About;
