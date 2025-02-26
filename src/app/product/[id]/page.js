import { getTent } from '@/actions/getTent'
import FetchProduct from '@/components/custom/Products/FetchProduct'
import { PageContainer } from '@/components/custom/UI'
import React from 'react'

export const generateMetadata = async({ params }) => {

    const { id } = await params

    const product = await getTent(id);


    return {
        title: `Tentlify Rentals | ${product.product}`,
        description: `Details about ${product?.product}`,
        keywords: `${product?.product} rentals, ${product?.product} for rent, ${product?.product} rental, ${product?.product} tent rental, rent ${product?.product} cleveland, ${product?.product} rental cleveland, ${product?.product} tent rental cleveland`,
        openGraph: {
            title: `Tentlify Rentals | ${product.product}`,
            images: [{url: product?.image}]
        }
        
    };

}

const ProductDetailsPage = async({ params }) => {

  const { id } = await params

  return (
    <PageContainer>
      <FetchProduct id={id} />
    </PageContainer>
  )
}

export default ProductDetailsPage