import { useTranslation } from "react-i18next";
import { ListGroup, Card, Button } from "react-bootstrap";

interface CartOverviewProps {
  totalItems: number;
  subtotal: number;
  totalPrice: number;
  shippingCost: number;
  onCheckout: () => void;
}

const CartOverview: React.FC<CartOverviewProps> = ({
  totalItems,
  subtotal,
  totalPrice,
  shippingCost,
  onCheckout,
}) => {
  const { t } = useTranslation();

  return (
    <Card className="p-3 mb-3">
      <h4 className="mb-3">{t("cart.overview")}</h4>
      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between">
          <span>{t("cart.itemCount")}</span>
          <strong>{totalItems}</strong>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>{t("cart.subtotal")}</span>
          <strong>
            {t("currency")}
            {subtotal.toFixed(2)}
          </strong>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>{t("cart.shipping")}</span>
          <strong>
            {subtotal > 0
              ? `${t("currency")}${shippingCost.toFixed(2)}`
              : t("cart.free")}
          </strong>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>{t("cart.total")}</span>
          <strong>
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
        onClick={onCheckout}
      >
        {t("cart.checkout")}
      </Button>
    </Card>
  );
};

export default CartOverview;
