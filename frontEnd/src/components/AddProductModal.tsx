import React, { useState } from 'react';
import { useAddProductMutation } from '../features/api/apiSlice';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';


interface AddProductModalProps {
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onClose }) => {
  const [type, setType] = useState('');
  const [prix, setPrix] = useState('');
  const [reference, setReference] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const clientId = useSelector((state:any) => state.auth.clientId);
console.log(clientId);

  const [addProduct, { isLoading }] = useAddProductMutation();

  const handleAddProduct = async () => {
    if (description && prix) {
      await addProduct({
        clientId:clientId,
        type,
        prix: parseFloat(prix),
        reference,
        description,
        imageUrl,
      });
      setType('');
      setPrix('');
      setReference('');
      setDescription('');
      setImageUrl('');
      onClose();
    }
  };

  return (
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
                      <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-gray-900 my-5">
                        Ajoute une Produit
                      </Dialog.Title>
                      <div className="mt-2">
                        <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Product Type" className="border p-2 mb-2 w-full rounded-lg border-gray-400" />
                        <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} placeholder="Product Price" className="border p-2 mb-2 w-full rounded-lg border-gray-400" />
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border p-2 mb-2 w-full rounded-lg border-gray-400" />
                        <input type="text" value={reference} onChange={(e) => setReference(e.target.value)} placeholder="Reference" className="border p-2 mb-2 w-full rounded-lg border-gray-400" />
                        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" className="border p-2 mb-2 w-full rounded-lg border-gray-400" />
                        <button onClick={handleAddProduct} className="bg-blue-500 text-white p-2 w-full rounded-lg" disabled={isLoading}>
                          {isLoading ? 'Adding...' : 'Ajouter Prodouit'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 cursor-pointer w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Fermer
                  </button>
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddProductModal;
