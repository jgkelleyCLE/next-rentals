'use client';
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useSendEmailMutation } from '@/redux/emailApi';
import { toast } from 'sonner';
import { format, set } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { useCreateOrderMutation } from '@/redux/ordersApi';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { clearCart } from '@/redux/cartSlice';

const EmailModal = ({ subtotal, deliveryFee, taxPrice, total }) => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cartList);
  const router = useRouter();
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p className="font-bold">Event date: {format(selected, 'PP')}.</p>;
  }

  const [
    createOrder,
    { data: orderData, isLoading: orderLoading, isSuccess: orderSuccess, isError: orderError, error: orderErrorData },
  ] = useCreateOrderMutation();

  const [sendEmail, { data: emailData, isLoading, isSuccess, isError, error }] = useSendEmailMutation();

  const emailHandler = (cart, subtotal, deliveryFee, taxPrice, total, email, selected) => {
    sendEmail({ cart, subtotal, deliveryFee, taxPrice, total, email, selected, title });

    setEmail('');
    setSelected('');
    toast.success('Email sent');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      toast.error('Title required.');
    } else if (!email) {
      toast.error('Email required.');
    } else if (!selected) {
      toast.error('Date required.');
    } else {
      emailHandler(cart, subtotal, deliveryFee, taxPrice, total, email, selected, title);

      if (title && email && selected) {
        createOrder({
          title,
          cart,
          eventDate: selected,
          itemsPrice: subtotal,
          taxPrice,
          shippingPrice: deliveryFee,
          totalPrice: total,
          orderStatus: 'Pending',
        });
      }
    }
  };

  useEffect(() => {
    if (orderSuccess) {
      toast.success('Order successfully created.');
      setOpen(false);
      dispatch(clearCart());
      router.push('/thank-you');
    }

    if (orderError) {
      toast.error('Failed to create order');
    }
  }, [orderSuccess, orderError]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <p className="bg-blue-500 hover:bg-blue-600 transition duration-300 p-2 rounded-md mt-2 mb-1 w-full text-white">
          Email Quote
        </p>
      </DialogTrigger>
      <DialogContent className="w-11/12 max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Email Your Quote</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col items-center w-full" onSubmit={submitHandler}>
          <input
            required
            className="border-2 border-gray-300 p-2 rounded-md my-1 w-full"
            placeholder="Event Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <input className="border-2 border-gray-300 p-2 rounded-md my-1 w-full" type="date" value={formData.date} onChange={(e)=> setFormData({ ...formData, date: e.target.value })} /> */}
          <label>Date of event:</label>
          <DayPicker mode="single" selected={selected} onSelect={setSelected} footer={footer} />
          <input
            required
            className="border-2 border-gray-300 p-2 rounded-md my-1 w-full"
            placeholder="Your email address"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-safariOrange hover:bg-safariOrangeHover text-white w-full p-2 rounded-md" type="submit">
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
