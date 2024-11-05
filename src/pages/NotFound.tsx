import { getLanguageFromRoute } from "../locales/i18n";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  const currentLanguage = getLanguageFromRoute();
  return (
    <div className="d-flex justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">{t("notFound.message")}</p>
        <a href={`#/${currentLanguage}/`} className="btn btn-primary">
          {t("notFound.goHome")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
