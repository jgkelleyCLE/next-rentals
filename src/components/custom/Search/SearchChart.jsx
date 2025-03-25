'use client';
import { useGetAllSearchesQuery } from '@/redux/searchApi';
import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SearchChart = () => {
  const { data: searchTerms, isLoading, isSuccess, isError, error } = useGetAllSearchesQuery();

  // Function to count search term occurrences and get top terms
  const getTopSearchTerms = (searches) => {
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
      .slice(0, 20);

    return sortedTerms;
  };

  const topSearches = searchTerms ? getTopSearchTerms(searchTerms) : [];

  return (
    <div className="bg-gray-200 dark:bg-gray-700 dark:text-black  w-full my-2 p-2 rounded-md h-full">
      <h1 className="text-center font-bold text-xl dark:text-gray-300 text-gray-700">Most Popular Searches</h1>

      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart data={topSearches}>
          <XAxis dataKey="term" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SearchChart;
