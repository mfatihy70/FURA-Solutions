import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();

  return (
    <section
      className="mb-5 mt-5 py-5"
      style={{ backgroundColor: "#07416b", marginBottom: "5em" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h4 className="display-6 text-white mb-4">{t("about")}</h4>
            <p className="text-white text-justify fs-6">
              {t("about_text.first")}
            </p>
            <p className="text-white text-justify mt-3 fs-6">
              {t("about_text.second")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
