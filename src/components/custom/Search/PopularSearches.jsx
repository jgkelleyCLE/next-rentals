'use client';
import { useGetAllSearchesQuery } from '@/redux/searchApi';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FlexColumn } from '../UI';
import PageSpinner from '@/components/Loading/PageSpinner';
import { is } from 'date-fns/locale';

const PopularSearches = () => {
  const { data: searchTerms, isLoading, isSuccess, isError, error } = useGetAllSearchesQuery();

  const getTopSearchTerms = (searches, limit = 10) => {
    if (!searches || !searches.length) return [];

    // Count occurrences of each search term
    const termCounts = searches.reduce((acc, search) => {
      const term = search.term.toLowerCase(); // Normalize to lowercase
      acc[term] = (acc[term] || 0) + 1;
      return acc;
    }, {});

    // Convert to array and sort by count (descending)
    const sortedTerms = Object.entries(termCounts)
      .map(([term, count]) => ({ term, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);

    return sortedTerms;
  };

  const topSearches = searchTerms ? getTopSearchTerms(searchTerms) : [];

  const router = useRouter();

  let content;

  if (isLoading) {
    content = (
      <FlexColumn>
        <PageSpinner />
      </FlexColumn>
    );
  } else if (isSuccess) {
    content = topSearches.slice(0, 10).map((item) => (
      <div
        key={item.term}
        className="flex items-center justify-between gap-2 bg-white dark:bg-gray-800 p-2 rounded-md my-1 hover:bg-white/60 dark:hover:bg-gray-900 transition duration-300"
      >
        <h1>"{item.term}"</h1>
        <span className="text-gray-400 italic text-xs">{item.count} searches</span>
      </div>
    ));
  }

  return (
    <div className="bg-gray-200 dark:bg-gray-700 w-full p-2 rounded-md md:w-1/2 h-full">
      <h1 className="text-xl flex dark:text-gray-300 text-gray-700 font-bold items-center gap-2 mb-2">
        10 Most Popular Searches
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

export default PopularSearches;
