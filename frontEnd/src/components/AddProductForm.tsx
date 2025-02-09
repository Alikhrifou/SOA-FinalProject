import React, { useState } from 'react';
import { useAddProductMutation } from '../features/api/apiSlice';

const AddProductForm: React.FC = () => {
  const [type, setType] = useState('');
  const [prix, setPrix] = useState('');
  const [reference, setReference] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [addProduct] = useAddProductMutation();

  const handleAddProduct = async () => {
    await addProduct({ type,reference,description,imageUrl, prix: parseFloat(prix) });
    
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Add Product</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Name"
        className="border p-2 mb-4"
      />
      <input
        type="number"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        placeholder="Product Price"
        className="border p-2 mb-4"
      />
      <button onClick={handleAddProduct} className="bg-blue-500 text-white p-2">
        Add Product
      </button>
    </div>
  );
};

export default AddProductForm;
