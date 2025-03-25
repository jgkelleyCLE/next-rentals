'use client';
import { useGetAllSearchesQuery } from '@/redux/searchApi';
import React from 'react';
import { FlexColumn } from '../UI';
import PageSpinner from '@/components/Loading/PageSpinner';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const SearchTerms = () => {
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
    content = searchTerms?.slice(0, 10).map((item) => (
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
    <div className="bg-gray-200 dark:bg-gray-700 w-full p-2 rounded-md md:w-1/2">
      <h1 className="text-xl font-bold dark:text-gray-300 text-gray-700 flex items-center gap-2 mb-2">
        10 Most Recent Searches
      </h1>

      {content}

      <Button
        onClick={() => router.push('/admin/all-searches')}
        className="bg-safariOrange dark:bg-safariOrangeHover text-white w-full mt-1 font-bold p-2 rounded-md"
      >
        View All Searches
      </Button>
    </div>
  );
};

export default SearchTerms;
