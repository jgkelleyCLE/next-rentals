
import CartList from '@/components/custom/Cart/CartList'
import { PageContainer } from '@/components/custom/UI'
import React from 'react'

export const metadata = {
  title: 'Cart | Tentlify Rentals',
  description: 'Cart page',
}

const CartPage = () => {

  

  return (
    <PageContainer>
      <CartList />
    </PageContainer>
  )
}

export default CartPage