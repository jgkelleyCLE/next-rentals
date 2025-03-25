'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { CartProvider } from './CartProvider';

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <CartProvider>{children}</CartProvider>
    </Provider>
  );
};

export default ReduxProvider;
