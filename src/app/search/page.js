"use client"
import ProductCard from '@/components/custom/Products/ProductCard'
import { CategoryGrid, FlexColumn, PageContainer } from '@/components/custom/UI'
import PageSpinner from '@/components/Loading/PageSpinner'
import { useSearchProductsQuery } from '@/redux/productApi'
import { useCreateSearchMutation } from '@/redux/searchApi'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const SearchResultsPage = () => {
    
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get('q')


    const { data: searchData, isLoading, isError, isSuccess, error } = useSearchProductsQuery(query)

    
   const [createSearch] = useCreateSearchMutation()

   useEffect(()=> {
      //count and Ids will be undefined unless there's searchData first
    if(query && searchData){
      createSearch({term: query, resultsCount: searchData?.length, resultIds: searchData?.map(item => item._id)})
    }

   }, [query, searchData])

    let content;
    let errorMessage

    if(isLoading){
        content = <div className="flex flex-col items-center w-full h-screen">
        <PageSpinner size="xl" />
      </div>
    }else if(isSuccess){

        if(searchData.length === 0 || searchData === undefined){
            errorMessage = (
                <div className="flex flex-col items-center w-full mt-40">
                  <h1 className="text-2xl font-semibold">Sorry, no products match your search</h1>
                </div>
              );
        }else {
            content = searchData?.map(item => (

              <ProductCard item={item} key={item._id} />
            
            
            ))
        }
        
    }

  return (
    <PageContainer>
        <FlexColumn>
        
        <h1 className="text-3xl mb-2">Search results for: "{query}"</h1>
        <h1>{errorMessage}</h1>
        <CategoryGrid className="">
        
            {content}
        </CategoryGrid>
    </FlexColumn>
    </PageContainer>
  )
}

export default SearchResultsPage