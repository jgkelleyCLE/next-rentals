"use client"
import { useGetAllSearchesQuery } from '@/redux/searchApi'
import React from 'react'
import { FlexColumn } from '../UI'
import PageSpinner from '@/components/Loading/PageSpinner'

const SearchTerms = () => {

    const { data: searchTerms, isLoading, isSuccess, isError, error } = useGetAllSearchesQuery()

    console.log(searchTerms)

    let content;

    if(isLoading){
        content = <FlexColumn><PageSpinner /></FlexColumn>
    }

  return (
    <div>
        {
            searchTerms ? <h1 className="text-xl flex items-center gap-2">The most recent search was "{searchTerms[0].term}" <span className="text-gray-400 italic text-xs">{new Date(searchTerms[0].createdAt).toLocaleString()}</span></h1> : null

        }
    </div>
  )
}

export default SearchTerms