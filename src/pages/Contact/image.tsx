import nefatakoy from "../../assets/images/nefatakoy.png";
import { useTranslation } from "react-i18next";

const ContactImage = () => {
  const { t } = useTranslation();
  return (
    <div className="position-relative">
      <img
        src={nefatakoy}
        alt="City skyline"
        className="w-100"
        style={{ height: "500px", objectFit: "cover" }}
      />
      <h1
        className="position-absolute top-50 start-50 translate-middle text-white"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        {t("contact")}
      </h1>
    </div>
  );
};

export default ContactImage;
