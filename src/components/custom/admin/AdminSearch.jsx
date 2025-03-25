import React from 'react';
import SearchTerms from './SearchTerms';
import { FlexRow } from '../UI';
import PopularSearches from '../Search/PopularSearches';
import SearchChart from '../Search/SearchChart';

const AdminSearch = () => {
  return (
    <div className="mb-10">
      <SearchChart />
      <FlexRow className="w-full flex flex-col md:flex-row gap-2 h-1/2">
        <SearchTerms />
        <PopularSearches />
      </FlexRow>
    </div>
  );
};

export default AdminSearch;
