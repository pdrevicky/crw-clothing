import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  CheckouItemImageContainer,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  CheckoutItemRemoveButton,
  CheckoutItemArrow,
  CheckoutItemValue,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const { name, imageUrl, quantity, price } = cartItem;

  const addItemHandler = () => addItemToCart(cartItem);

  const removeItemHandler = () => removeItemFromCart(cartItem);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckouItemImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckouItemImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={removeItemHandler}>
          &#10094;
        </CheckoutItemArrow>
        <CheckoutItemValue>{quantity}</CheckoutItemValue>
        <CheckoutItemArrow onClick={addItemHandler}>&#10095;</CheckoutItemArrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <CheckoutItemRemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
