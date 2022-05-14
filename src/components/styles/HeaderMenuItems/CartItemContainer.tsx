import styled from "styled-components";

export const CartItemContainer = styled.div<CartItemContainerProps>`
  display: flex;
  align-items: flex-end;

  & .shopping-cart-icon {
    display: flex;
    justify-content: center;
    position: relative;

    & p {
      position: absolute;
      top: -2px;
      left: 20px;
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary.orange_2};
    }

    & .shopping-cart-sprite {
      background-image: url(${({ AmazonNavSprite }) => AmazonNavSprite});
      width: 40px;
      height: 32px;
      background-position: -7px 115px;
      background-size: 352px;
    }
  }

  strong {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.white};
    white-space: nowrap;
  }
`;
