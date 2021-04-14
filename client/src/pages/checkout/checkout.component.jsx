import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  CheckoutBlockContainer,
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <CheckoutBlockContainer>
        <span>Product</span>
      </CheckoutBlockContainer>
      <CheckoutBlockContainer>
        <span>Description</span>
      </CheckoutBlockContainer>
      <CheckoutBlockContainer>
        <span>Quantity</span>
      </CheckoutBlockContainer>
      <CheckoutBlockContainer>
        <span>Price</span>
      </CheckoutBlockContainer>
      <CheckoutBlockContainer>
        <span>Remove</span>
      </CheckoutBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: ${cartTotal}</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test card for payments*
      <br />
      4242 4242 4242 4242 - Exp: any future date - CVV: any number
    </WarningContainer>
    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
