import { getTent } from '@/actions/getTent'
import FetchProduct from '@/components/custom/Products/FetchProduct'
import { PageContainer } from '@/components/custom/UI'
import React from 'react'

export const generateMetadata = async({ params }) => {

    const { id } = await params

    const product = await getTent(id);


    return {
        title: product.product,
        description: `Details about ${product?.product}`,
        openGraph: {
            title: `Tentlify | ${product.product}`,
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