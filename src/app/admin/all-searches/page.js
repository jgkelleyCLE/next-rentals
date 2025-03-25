'use client';
import { FlexColumn, PageContainer } from '@/components/custom/UI';
import PageSpinner from '@/components/Loading/PageSpinner';
import { useGetAllSearchesQuery } from '@/redux/searchApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AllSearches = () => {
  const { data: searchTerms, isLoading, isSuccess, isError, error } = useGetAllSearchesQuery();

  const router = useRouter();

  let content;

  if (isLoading) {
    content = (
      <FlexColumn>
        <PageSpinner />
      </FlexColumn>
    );
  } else if (isSuccess) {
    content = searchTerms?.map((item) => (
      <Link
        href={`/admin/search-details/${item._id}`}
        key={item._id}
        className="flex items-center justify-between gap-2 bg-white dark:bg-gray-800 p-2 rounded-md my-1 cursor-pointer hover:bg-white/60 dark:hover:bg-gray-900 transition duration-300"
      >
        <h1>"{item.term}"</h1>
        <span className="text-gray-400 italic text-xs">{new Date(item.createdAt).toLocaleString()}</span>
        <h1>{item.resultsCount} results</h1>
      </Link>
    ));
  }

  return (
    <PageContainer className="mx-auto">
      <h1 className="text-3xl ml-8">All Searches</h1>
      <FlexColumn>
        <div className="bg-gray-200 dark:bg-gray-700 w-11/12 p-2 rounded-md">{content}</div>
      </FlexColumn>
    </PageContainer>
  );
};

export default AllSearches;
