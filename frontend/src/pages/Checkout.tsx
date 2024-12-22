import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
// import { getLanguageFromRoute } from "@/locales/i18n";
// import Overview from "./cart/Overview";

const Checkout = () => {
  const { t } = useTranslation();
  //   const currentLanguage = getLanguageFromRoute();

  return (
    <Container>
      <h1 className="min-vh-100">{t("checkout.title")}</h1>
      {/* <div className="mx-auto" style={{ maxWidth: "600px" }}>
            <Overview />
        </div>
        <Button href={`#/${currentLanguage}/`} variant="primary" className="mt-4">
            {t("checkout.goHome")}
        </Button> */}
    </Container>
  );
};

export default Checkout;
