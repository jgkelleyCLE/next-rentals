import FetchProducts from '@/components/custom/Products/FetchProducts';
import React from 'react';

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;

  const categoryImages = {
    tents:
      'https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/7B487F91B0923473A0EC997E5C904F1F.jpg?alt=media&token=3f343ef4-d389-46ea-9b63-6623589502d5',
    tables: 'https://d2j6dbq0eux0bg.cloudfront.net/images/648178/1143315935.jpg',
    chairs:
      'https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/IMG_0059.jpg?alt=media&token=91cb8946-1828-4f36-9775-dc5d49574d4a',
    stage:
      'https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/IMG_1255.jpg?alt=media&token=cf2f5497-fc33-4d67-8cad-dacb9711cd90',
  };

  // Get the appropriate image based on the slug, or use a default image
  const categoryImage = categoryImages[slug.toLowerCase()] || categoryImages['tents'];

  return {
    title: `${slug} | Tentlify Rentals`,
    description: `Details about ${slug}`,
    keywords: `${slug} rental, ${slug} rental service, ${slug} rental company, ${slug} rental near me, ${slug} rental cleveland, ${slug} rental ohio, ${slug} rental for wedding, ${slug} rental for party, ${slug} rental for event, ${slug} rental for graduation, ${slug} rental for birthday, ${slug} rental for corporate event, ${slug} rental for outdoor event, ${slug} rental for backyard party, ${slug} rental for outdoor wedding, ${slug} rental for outdoor party, ${slug} rental for outdoor graduation, ${slug} rental for outdoor birthday, ${slug} rental for outdoor corporate event, ${slug} rental for indoor event`,
    openGraph: {
      title: `${slug} | Tentlify Rentals`,
      description: `Details about ${slug}`,
      images: [{ url: categoryImage }],
    },
  };
};

const ProductCategoryPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <FetchProducts slug={slug} />
    </div>
  );
};

export default ProductCategoryPage;
