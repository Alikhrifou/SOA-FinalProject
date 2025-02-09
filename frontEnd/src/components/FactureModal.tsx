import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdArrowRoundBack } from "react-icons/io";

interface Product {
  id: string;
  type?: string;
  reference?: string;
  prix: number;
  description: string;
  quantity: number;
}

interface FactureViewProps {
  products: Product[];
  onClose: () => void;
}


const FactureModal: React.FC<FactureViewProps> = ({ products, onClose }) => {


  const handlePrint = () => {
    window.print();
  };

  return (
    <Transition.Root show={true} >
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
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
                  
                      <div className='w-full'>
                        <h1 className='text-4xl mt-4 mb-6 py-4'>Facture</h1>
                        <table className='w-[25rem]'>
                          <thead>
                            <tr className='w-full justify-between items-center gap-4'>
                          
                              <th>Description</th>
                              <th>Prix</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((product) => (
                              <tr key={product.id}>
                               
                                <td>{product.description}</td>
                                <td>{product.prix}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className='flex justify-between mt-4 w-full'>
                          <button onClick={onClose} className='px-5 py-2 border rounded-md cursor-pointer'><IoMdArrowRoundBack /></button>
                          <button onClick={handlePrint} className='px-5 py-2 border rounded-md cursor-pointer'>Print</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>







  );
};

export default FactureModal;
