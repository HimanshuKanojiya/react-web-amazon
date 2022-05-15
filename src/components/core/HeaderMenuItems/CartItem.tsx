import React from "react";
import { CartItemContainer } from "components/styles/HeaderMenuItems/CartItemContainer";
import { amazonIcons } from "assets/icons";

export const CartItem: React.FC<DefaultCartItemProps> = ({
  itemsInCart,
  actionCTA,
}) => {
  const { AmazonNavSprite } = amazonIcons;
  return (
    <CartItemContainer AmazonNavSprite={AmazonNavSprite} onClick={actionCTA}>
      <div className="shopping-cart-icon">
        <p>{itemsInCart}</p>
        <div className="shopping-cart-sprite"></div>
      </div>
      <strong>Cart</strong>
    </CartItemContainer>
  );
};
