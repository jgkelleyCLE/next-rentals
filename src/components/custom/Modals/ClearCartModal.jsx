'use client';
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useDispatch } from 'react-redux';
import { FlexRow } from '../UI';
import { Button } from '@/components/ui/button';
import { clearCart } from '@/redux/cartSlice';
import { OrangeButton, OrangeTrigger } from '../Cart/Cart.styles';

const ClearCartModal = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearCart());
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <OrangeTrigger>Clear Cart</OrangeTrigger>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>This action cannot be undone. This will permanently clear your cart.</DialogDescription>
        </DialogHeader>
        <FlexRow className="mt-4">
          <Button>Cancel</Button>
          <Button className="bg-safariOrange hover:bg-safariOrangeHover text-white" onClick={clearHandler}>
            Yes, Clear Cart
          </Button>
        </FlexRow>
      </DialogContent>
    </Dialog>
  );
};

export default ClearCartModal;
