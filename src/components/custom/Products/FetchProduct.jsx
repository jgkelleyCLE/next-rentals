"use client"
import PageSpinner from '@/components/Loading/PageSpinner';
import { useGetProductQuery } from '@/redux/productApi'
import Image from 'next/image';
import React, { useState } from 'react'
import { AddToCartButton, FlexColumn, FlexRow, ProductDetailsContainer } from '../UI';
import { FaCartPlus } from 'react-icons/fa';
import { Input } from '@chakra-ui/react';
import { addToCart } from '@/redux/cartSlice';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';

const FetchProduct = ({ id }) => {

    const [quantity, setQuantity] = useState("")
    const dispatch = useDispatch()

    const { data: product, isLoading, isSuccess, isError, error } = useGetProductQuery(id)

    const cartHandler = (product) => {
      
        if(quantity === ""){
          return toast.error("Please enter a quantity",)
        }else {
          dispatch(addToCart({...product, cartQuantity: quantity}))
          toast.success(`${quantity} - ${product.product}${quantity > 1 ? 's' : ''} added to cart`);
          setQuantity("")
        }
        
      }

    let content;

    if(isLoading){
        content = <FlexColumn><PageSpinner /></FlexColumn>
    }else if(isSuccess){
        content = <FlexRow className="mt-2 flex-col lg:flex-row items-start  ">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 w-full  ">
          <Image width={1000} height={600} className="w-full rounded-md max-h-[700px] object-contain" src={product?.image} alt={product?.product} />
        </div>
  
        {/* RIGHT SIDE */}
        <ProductDetailsContainer className="lg:w-1/2 w-full">
          <h1 className="text-2xl font-bold">{product?.product}</h1>
          <h1 className="text-gray-600 dark:text-gray-300 font-semibold my-4">${product?.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
          {/* <h1 className="font-semibold text-gray-500">Reviews ({product?.numReviews})</h1> */}
          
          <Input bg="white" type='number' className="w-full max-w-[300px] p-2 text-black font-bold text-xl" placeholder="Qty" value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))} />
          <AddToCartButton className='w-full max-w-[300px] bg-green-400 hover:bg-green-500 font-bold' onClick={()=> cartHandler(product)}><FaCartPlus className="text-xl"  /> Add to Cart</AddToCartButton>
          
        </ProductDetailsContainer>
      </FlexRow>
    }

  return (
    <div className="mx-4">
        {content}
    </div>
  )
}

export default FetchProduct