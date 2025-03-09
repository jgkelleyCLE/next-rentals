"use client"
import { FlexColumn, PageContainer } from '@/components/custom/UI'
import PageSpinner from '@/components/Loading/PageSpinner'
import { useGetSearchByIdQuery } from '@/redux/searchApi'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const SearchDetailsPage = () => {

  const params = useParams()
  const id = params.id


    const { data: searchTerm, isLoading, isSuccess, isError, error } = useGetSearchByIdQuery(id)

  return (
      <PageContainer>
        {isLoading ? <FlexColumn className="mt-10"><PageSpinner /></FlexColumn> : null}
        {
            searchTerm ? (
              <div className="ml-8">
            <h1 className="text-3xl">Search for "{searchTerm.term}"</h1>
            <p>Results: {searchTerm.resultsCount}</p>
            </div>
          ) : null
        }
        {
          searchTerm?.resultIds?.map((item) => (
            <div key={item._id} className="flex flex-row items-center justify-between border-b border-gray-200 p-4 w-11/12 mx-auto">
                <div className="flex flex-row items-center">
                    <Image width={300} height={200} src={item.image} alt={item.product} className="w-20 h-20 object-contain rounded-md" />
                    <div className="ml-4">
                        <p className="text-md md:text-xl font-bold">{item.product}</p>
                    </div>
                </div>
                <p className="text-md md:text-xl font-bold">${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
          ))
        }
        
    </PageContainer>
  )
}

export default SearchDetailsPage