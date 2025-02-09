import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="border p-2 mb-2">
            {item.description} - ${item.prix} x {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)} className="bg-red-500 text-white p-2 ml-4">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-xl mt-4">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
