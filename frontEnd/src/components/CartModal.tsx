import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart } from '../features/cart/cartSlice';
import { Dialog, Transition } from '@headlessui/react';
import { HiOutlineTrash } from 'react-icons/hi';
import FactureModal from '../components/FactureModal'; // Import the facture modal

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const [isFactureOpen, setIsFactureOpen] = useState(false);

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleOpenFacture = () => {
    setIsFactureOpen(true);
  };

  const handleCloseFacture = () => {
    setIsFactureOpen(false);
  };
  return (
    <>
      <Transition.Root show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                           Cart
                        </Dialog.Title>
                        <div className="mt-2 w-[28rem]">
                          <ul>
                            {cartItems.map((item: any) => (
                              <li key={item.id} className="border rounded p-2 mb-2 flex justify-between items-center w-full">
                                {item.description} - ${item.prix} x {item.quantity}
                                <button onClick={() => handleRemoveFromCart(item.id)} className="text-white p-2 ml-4">
                                  <HiOutlineTrash color="red" size={30} className='cursor-pointer'/>
                                </button>
                              </li>
                            ))}
                          </ul>
                          <div className="text-xl mt-4">Total: ${totalPrice.toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {!isFactureOpen &&
                    <div className="flex justify-between bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="w-full inline-flex cursor-pointer justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleOpenFacture}
                      >
                       Générer une Facture
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex cursor-pointer justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={onClose}
                      >
                        Fermer
                      </button>
                    </div>
                  }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Facture Modal */}
      {isFactureOpen && <FactureModal products={cartItems} onClose={handleCloseFacture} />}
    </>
  );
};

export default CartModal;
