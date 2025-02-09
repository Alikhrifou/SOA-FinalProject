import React from 'react'
import { HiTrash } from 'react-icons/hi'
import { useDeleteProductMutation } from '../features/api/apiSlice';


interface IProduct {
    id: any;
    imageUrl: string,
    type?: string,
    reference?: string,
    prix: number,
    description: string,
    handleClick: () => void

}

function ProductCard({ id, imageUrl, prix, reference, description, handleClick }: IProduct) {

    const [deleteProduct] = useDeleteProductMutation();

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(id).unwrap();
            console.log('Product deleted successfully');
        } catch (error) {
            console.error('Failed to delete the product: ', error);
        }
    };

    return (
        <div>
            <a href="#" className="group relative block overflow-hidden">
                <button
                    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >

                </button>

                <img
                    src={imageUrl}
                    alt=""
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 p-10 "
                />

                <div className="relative border border-gray-100 bg-white p-6">
                    <p className="text-gray-700">
                        {prix}
                        <span className="text-gray-400 line-through ml-10">{prix + 200}</span>
                    </p>

                    <h3 className="mt-1.5 text-lg font-medium text-gray-900">{reference}</h3>

                    <p className="mt-1.5 line-clamp-3 text-gray-700">
                        {description}
                    </p>
                    <p>
                        {reference}
                    </p>

                    <form className="mt-4 flex gap-4">
                        <button onClick={handleClick} type='button'
                            className="block w-full bg-gray-400 rounded-sm  cursor-pointer px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                        >
                            Add to Cart
                        </button>

                        <HiTrash color='red' size={30} className='flex justify-center items-center pt-3 cursor-pointer' onClick={handleDeleteProduct} />
                    </form>
                </div>
            </a>
        </div>
    )
}

export default ProductCard