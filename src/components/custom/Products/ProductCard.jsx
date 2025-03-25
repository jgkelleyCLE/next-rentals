'use client';
import React, { useState } from 'react';
import { FlexRow, ItemCard, ProductCardDetails, ProductImage, ViewProductButton } from '../UI';
import { Input } from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { usePathname, useRouter } from 'next/navigation';
import { addToCart } from '@/redux/cartSlice';
import Image from 'next/image';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const cartHandler = (item) => {
    if (quantity === '') {
      return toast.error('Please enter a quantity');
    } else {
      dispatch(addToCart({ ...item, cartQuantity: quantity }));
      toast.success(`${quantity} - ${item.product}${quantity > 1 ? 's' : ''} added to cart`);
      setQuantity('');
    }
  };

  return (
    <ItemCard key={item._id} className="relative">
      <Image
        src={item.image}
        alt={item.product}
        width={400}
        height={200}
        onClick={() => router.push(`/product/${item._id}`)}
        className="rounded-t-md w-full h-[250px] object-cover bg-white cursor-pointer"
        priority={false}
      />
      <ProductCardDetails>
        <FlexRow>
          <h1 className="font-semibold text-md md:text-lg lg:text-xl line-clamp-1">{item.product}</h1>
        </FlexRow>
        <h1 className="font-semibold text-gray-400 -mt-1">
          ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </h1>
        {/* <FlexRow className=" w-full mb-1">
                          <Input w="20" bg="white" type='number'  placeholder="Qty" value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))} className="p-2 text-black font-bold" />
                          <button onClick={()=> cartHandler(item)} className="bg-green-400 hover:bg-green-500 transition duration-300 p-2 rounded-md flex items-center justify-center w-full">
                            <FaCartPlus className="text-lg text-white mr-2" />
                            <p className="text-white font-semibold flex items-center">Add <span className="hidden md:flex">&nbsp;to Cart</span></p>
                            </button>
                        </FlexRow> */}
        <ViewProductButton onClick={() => router.push(`/product/${item._id}`)}>View Product</ViewProductButton>
      </ProductCardDetails>
    </ItemCard>
  );
};

export default ProductCard;
