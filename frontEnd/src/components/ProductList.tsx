import React, { useEffect } from 'react';
import { useFetchProductsQuery, useAddProductMutation } from '../features/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import ProductCard from '../custom/ProductCard';
import Header from './Header';
import { RootState } from '../store';

const ProductList: React.FC = () => {
  const { data: products, error, isLoading, refetch } = useFetchProductsQuery();
  const dispatch = useDispatch();
  const { clientId } = useSelector((state: RootState) => state.auth);
  console.log(clientId)
  const handleAddToCart = (productId: string, description: string, prix: number, reference: string) => {
    dispatch(addToCart({ id: productId, description: description, prix: prix, quantity: 1, reference: reference }));
  };

  let content;

  console.log(products)

  useEffect(() => {
    refetch()
  }, [])

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading products</div>;
  } else {
    content = (
      <section style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px" }}>
        {products?.map((product: any) => (

          <ProductCard id={product.id} imageUrl={product.imageUrl} description={product.description} prix={product.prix} key={product.id} handleClick={() => handleAddToCart(product.id, product.description, product.prix)}
            reference={''} />

        ))}
      </section>
    );
  }

  return (<>
    <Header />
    <div className="p-4">
      <h2 className="text-2xl mb-4">Products</h2>
      {content}
    </div>
  </>
  );
};

export default ProductList;
