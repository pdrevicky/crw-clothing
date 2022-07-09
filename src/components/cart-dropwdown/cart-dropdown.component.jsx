import Button from "../button/button.componet";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";

import {
  CartDrowpdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropwdown.style.jsx";

import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDrowpdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDrowpdownContainer>
  );
};

export default CartDropdown;
