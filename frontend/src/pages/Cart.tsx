import { useTranslation } from "react-i18next"

const Cart = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t("cart.title")}</h1>
      <p>{t("cart.empty")}</p>
    </div>
  )
}

export default Cart
