'use client';
import { useGetActiveProductsByCategoryQuery, useGetProductsByCategoryQuery } from '@/redux/productApi';
import React from 'react';
import { FlexColumn, GridContainer, PageContainer } from '../UI';
import ProductCard from './ProductCard';
import PageSpinner from '@/components/Loading/PageSpinner';

const FetchProducts = ({ slug }) => {
  // const { data: products, isLoading, isSuccess, isError, error } = useGetProductsByCategoryQuery(slug)

  const { data: products, isLoading, isSuccess, isError, error } = useGetActiveProductsByCategoryQuery(slug);

  let content;

  if (isSuccess) {
    content = products?.map((item) => <ProductCard key={item._id} item={item} />);
  }

  return (
    <PageContainer>
      <h1 className="ml-4 text-3xl">{slug}</h1>
      <FlexColumn>{isLoading ? <PageSpinner /> : null}</FlexColumn>
      <GridContainer>{content}</GridContainer>
    </PageContainer>
  );
};

export default FetchProducts;
