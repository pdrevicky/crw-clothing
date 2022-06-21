import {
  ProductCartContainer,
  ProductCardImage,
  ProductCardFooter,
  ProductCardPrice,
  ProductCardName,
} from "./product.card.styles.jsx";

import Button from "../button/button.componet";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button onClick={addProductToCart} buttonType="inverted">
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
