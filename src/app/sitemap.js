import { getProducts } from '@/actions/getAllProducts';

const sitemap = async () => {
  const products = await getProducts();

  const product = products?.map((product) => {
    return {
      url: `https://tentlifyrentals.com/product/${product._id}`,
    };
  });

  return [
    {
      url: 'https://tentlifyrentals.com/',
      lastModified: new Date(),
    },
    ...product,
  ];
};

export default sitemap;
