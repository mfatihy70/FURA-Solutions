import { useTranslation } from "react-i18next";
import { Image, Container } from "react-bootstrap";
import nefatakoy from "@/assets/images/nefatakoy.png";

const ContactImage = () => {
  const { t } = useTranslation();
  return (
    <Container fluid className="position-relative p-0">
      <Image
        src={nefatakoy}
        alt="City skyline"
        className="w-100"
        style={{ height: "500px", objectFit: "cover" }}
        fluid
      />
      <h1 className="position-absolute top-50 start-50 translate-middle text-white bg-dark bg-opacity-50 rounded p-2">
        {t("contact.title")}
      </h1>
    </Container>
  );
};

export default ContactImage;
