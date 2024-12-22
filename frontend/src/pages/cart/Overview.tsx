import { useTranslation } from "react-i18next";
import { ListGroup, Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

// Props interface for CartOverview
interface CartOverviewProps {
  totalItems: number;
  subtotal: number;
  totalPrice: number;
  shippingCost: number;
}

const CartOverview: React.FC<CartOverviewProps> = ({
  totalItems,
  subtotal,
  totalPrice,
  shippingCost,
}) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  return (
    <Card className="p-3 mb-3">
      <h4 className="mb-3">{t("cart.overview")}</h4>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between">
          <span>{t("cart.itemCount")}</span>
          {totalItems}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>{t("cart.subtotal")}</span>
          {t("currency")}
          {subtotal.toFixed(2)}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>{t("cart.shipping")}</span>
          {subtotal > 0
            ? `${t("currency")}${shippingCost.toFixed(2)}`
            : t("cart.free")}
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>{t("cart.total")}</span>
          <strong style={{ textDecoration: "underline" }}>
            {t("currency")}
            {totalPrice.toFixed(2)}
          </strong>
        </ListGroup.Item>
      </ListGroup>
      <Button
        variant="success"
        size="lg"
        className="mt-3 w-100"
        disabled={totalItems === 0}
        onClick={() => navigate(`/${lang}/checkout`)}
      >
        {t("cart.checkout")}
      </Button>
    </Card>
  );
};

export default CartOverview;
