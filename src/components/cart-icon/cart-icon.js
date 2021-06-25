import { CartContext } from '../../contexts/cart-provider';
import { useContext } from 'react';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
