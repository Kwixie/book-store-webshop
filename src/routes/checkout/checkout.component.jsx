import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form-component";

import "./checkout.styles.scss";
import Footer from "../../components/footer/footer.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produkt</span>
        </div>
        <div className="header-block">
          <span className="titel">Titel</span>
        </div>
        <div className="header-block">
          <span>Antal</span>
        </div>
        <div className="header-block">
          <span>Pris</span>
        </div>
        <div className="header-block">
          <span>Ta bort</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTALT: {cartTotal}kr</div>
      <PaymentForm />
      <Footer />
    </div>
  );
};

export default Checkout;
