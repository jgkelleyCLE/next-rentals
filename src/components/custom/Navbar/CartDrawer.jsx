'use client';

import { Button } from '@chakra-ui/react';
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useState, useRef } from 'react';
import { IoCart } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '@/redux/cartSlice';
import { FlexColumn } from '../UI';
import { TiDelete } from 'react-icons/ti';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { OrangeButton } from '../Cart/Cart.styles';
import Image from 'next/image';

const CartDrawer = () => {
  const [open, setOpen] = useState(false);

  const cart = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const router = useRouter();

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.cartQuantity, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = 85.0;
  const taxPrice = subtotal * 0.15;
  const total = subtotal + deliveryFee + taxPrice;

  const removeHandler = (item) => {
    dispatch(removeFromCart(item));
    toast.success(`${item.product} removed from cart`);
  };

  // Sort the cart items by price in descending order
  const sortedCart = [...cart].sort((a, b) => b.price - a.price);

  const list = sortedCart?.map((item) => (
    <div
      key={item.id}
      className="bg-gray-200 dark:bg-gray-800 dark:text-gray-200 p-2 rounded-md flex items-center justify-start my-2 relative cursor-pointer hover:bg-gray-100 transition duration-300"
      onClick={() => navigationHandler(item)}
    >
      <Image width={100} height={100} src={item.image} alt={item.product} className="w-20 rounded-md m-2 mr-4" />
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{item.product}</h1>
        <h1 className="text-sm">
          ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </h1>
        <h1 className="text-sm">Qty: {item.cartQuantity}</h1>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent event from bubbling up to the parent div
          removeHandler(item);
        }}
      >
        <TiDelete className="text-3xl absolute -top-2 -right-3 z-40 hover:text-red-500 transition duration-300" />
      </button>
    </div>
  ));

  const cartHandler = () => {
    router.push('/cart');
    setOpen(false);
  };

  const navigationHandler = (item) => {
    router.push(`/product/${item._id}`);
    setOpen(false);
  };

  const productHandler = () => {
    router.push('/product');
    setOpen(false);
    // onClose()
  };

  return (
    <DrawerRoot size="md" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" className="relative mr-5">
          <IoCart className="text-3xl w-6 h-6 text-white" />
          <div className="absolute bottom-5 left-6 w-5 h-5 bg-red-500 flex items-center justify-center rounded-full">
            <h1 className="text-white text-sm">{cart.length}</h1>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-2xl">Cart</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          {cart.length === 0 ? (
            <FlexColumn>
              <h1 className="text-xl text-gray-400 italic">Cart is empty</h1>
              <OrangeButton onClick={() => productHandler()}>View Products</OrangeButton>
            </FlexColumn>
          ) : null}
          {list}
        </DrawerBody>
        <DrawerFooter>
          <div className="flex flex-col items-end gap-2">
            <h1 className="text-2xl">
              Subtotal: ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h1>
            {/* <h1>Delivery Fee: ${deliveryFee.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
            <h1>Tax: ${taxPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
            <h1>Total: ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1> */}
            <div className="flex items-center gap-2">
              <OrangeButton
                className="bg-gray-400 hover:bg-gray-300 transition duration-300 mt-0"
                mr={3}
                onClick={() => setOpen(false)}
              >
                Cancel
              </OrangeButton>
              <OrangeButton className="mt-0" onClick={cartHandler}>
                View Quote
              </OrangeButton>
            </div>
          </div>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default CartDrawer;
