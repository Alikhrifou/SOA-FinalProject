import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CartModal from './CartModal';
import AddProductModal from './AddProductModal';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineLogout } from "react-icons/ai";


const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
}


  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">E-commerce App</h1>
      <div className="flex space-x-4">
        <button onClick={() => setIsAddProductOpen(true)} className="bg-blue-500 p-2 rounded cursor-pointer">
          Add Product
        </button>
        <button onClick={() => setIsCartOpen(true)} className="relative border rounded-full p-2 border-white">
        <GiShoppingCart  className='cursor-pointer'  size={30}/>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
      <div>
      <AiOutlineLogout onClick={logout} className='cursor-pointer' size={20} />
      </div>
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
      {isAddProductOpen && <AddProductModal onClose={() => setIsAddProductOpen(false)} />}
    </div>
  );
};

export default Header;
