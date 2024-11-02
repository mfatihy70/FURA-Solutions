import flexa from "/src/assets/images/partners/flexa.png";
import agro from "/src/assets/images/partners/agro.png";
import hellermanntyton from "/src/assets/images/partners/hellermanntyton.png";
import ivmtech from "/src/assets/images/partners/ivm.png";
import "/src/styles/Partners.css";
import { useTranslation } from "react-i18next";

const PartnersChild = () => {
  const { t } = useTranslation();
  return (
    <div className="container my-4">
      <h1 className="mb-5 mt-5">{t("partners")}</h1>
      <div className="row align-items-center">
        <div className="col-md-3 col-sm-6 mb-4">
          <a
            href="https://www.flexa.de/home/EN_index_1000.html"
            className="d-block text-center"
          >
            <img src={flexa} alt="Flexa" className="img-fluid partner-img" />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <a
            href="https://www.kaiser-elektro.de/en_DE/products/cable-glands-industrial-products/"
            className="d-block text-center"
          >
            <img
              src={agro}
              alt="Kaiser Elektro"
              className="img-fluid partner-img"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <a
            href="https://www.hellermanntyton.com/tr"
            className="d-block text-center"
          >
            <img
              src={hellermanntyton}
              alt="Hellermann Tyton"
              className="img-fluid partner-img"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <a href="https://ivmtech.it/en/" className="d-block text-center">
            <img
              src={ivmtech}
              alt="Ivmtech"
              className="img-fluid partner-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersChild;
