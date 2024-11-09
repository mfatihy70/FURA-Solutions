import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <main style={{ flexGrow: 1 }}>
        <div className="container my-4">
          <h2 className="mb-4">{t("about")}</h2>
          <div className="text-start">
            <p className="lead mb-4">{t("about_text.first")}</p>
            <p className="lead">{t("about_text.second")}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
