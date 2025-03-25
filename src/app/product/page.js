import { getProducts } from '@/actions/getAllProducts';
import CategoryCard from '@/components/custom/Products/CategoryCard';
import { CategoryGridContainer, GridContainer, PageContainer } from '@/components/custom/UI';
import React from 'react';

export const metadata = {
  title: 'Products | Tentlify Rentals',
  description: "Cleveland Ohio's premier table rental service, chair rental service, and tent rental service",
  keywords:
    'tent rental, party rental, event rental, wedding rental, cleveland tent rental, ohio table rental, table rental service, chair rental, cleveland chair rental, ohio chair rental, table rental, cleveland table rental, ohio table rental, tent rental service, tent rental company, tent rental near me, tent rental cleveland, tent rental ohio, tent rental for wedding, tent rental for party, tent rental for event, tent rental for graduation, table rental for birthday, tent rental for corporate event, tent rental for outdoor event, tent rental for backyard party, tent rental for outdoor wedding, tent rental for outdoor party, tent rental for outdoor graduation, tent rental for outdoor birthday, tent rental for outdoor corporate event, business tent, business rental, chair rental for indoor party, chair rental for indoor wedding, chair rental for indoor graduation, chair rental for indoor birthday, chair rental for indoor corporate event, chair rental for outdoor event, chair rental for backyard party, chair rental for outdoor wedding, chair rental for outdoor party, chair rental for outdoor graduation, chair rental for outdoor birthday, chair rental for outdoor corporate event, chair rental for indoor event, stage rental, stage rental for indoor party, stage rental for indoor wedding, stage rental for indoor graduation, stage rental for indoor birthday, stage rental for indoor corporate event, stage rental for outdoor event, stage rental for backyard party, stage rental for outdoor wedding, stage rental for outdoor party, stage rental for outdoor graduation, stage rental for outdoor birthday, stage rental for outdoor corporate event, stage rental for indoor event',
  openGraph: {
    images: [
      {
        url:
          'https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/7B487F91B0923473A0EC997E5C904F1F.jpg?alt=media&token=3f343ef4-d389-46ea-9b63-6623589502d5',
      },
    ],
  },
};

const ProductsPage = () => {
  return (
    <PageContainer>
      <CategoryGridContainer>
        <CategoryCard
          title="Tents"
          image="https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/7B487F91B0923473A0EC997E5C904F1F.jpg?alt=media&token=3f343ef4-d389-46ea-9b63-6623589502d5"
        />
        <CategoryCard title="Tables" image="https://d2j6dbq0eux0bg.cloudfront.net/images/648178/1143315935.jpg" />
        <CategoryCard
          title="Chairs"
          image="https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/IMG_0059.jpg?alt=media&token=91cb8946-1828-4f36-9775-dc5d49574d4a"
        />
        <CategoryCard
          title="Stage"
          image="https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/IMG_1255.jpg?alt=media&token=cf2f5497-fc33-4d67-8cad-dacb9711cd90"
        />
      </CategoryGridContainer>
    </PageContainer>
  );
};

export default ProductsPage;
