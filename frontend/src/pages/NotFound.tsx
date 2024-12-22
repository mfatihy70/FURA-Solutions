import { useTranslation } from "react-i18next";
import { getLanguageFromRoute } from "@/locales/i18n";
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  const { t } = useTranslation();
  const currentLanguage = getLanguageFromRoute();

  return (
    // To fix the content to the top and footer to the bottom
    <Container className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1 d-flex flex-column align-items-center text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">{t("notFound.message")}</p>
        <Button href={`#/${currentLanguage}/`} variant="primary">
          {t("notFound.goHome")}
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
