"use client"
import { useGetAllProductsQuery } from '@/redux/productApi'
import React, { useState } from 'react'
import { Table } from "@chakra-ui/react"
import Link from 'next/link'
import { FlexColumn } from '../UI'
import PageSpinner from '@/components/Loading/PageSpinner'
import ProductStatusSelect from './ProductStatusSelect'
import Image from 'next/image'

const AllProducts = () => {

    const { data: products, isLoading, isSuccess, isError, error } = useGetAllProductsQuery()

    const [query, setQuery] = useState('')

    const filteredProducts = products?.filter((item) => item.product.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()) || item.status.toLowerCase().includes(query.toLowerCase()) || item.tags.toLowerCase().includes(query.toLowerCase()))
    

    let content;
    if(isSuccess){
        content = filteredProducts?.map((item, index) => (
            <Table.Row key={item._id} className={`${item.status === "Inactive" ? "bg-red-100 dark:bg-red-950" : null} border-2 border-gray-300 relative`}>
                {/* <h1 className="absolute -left-6">{index + 1}</h1> */}
              <Table.Cell className="hidden md:block"><Link href={`/product/${item._id}`}><Image width={75} height={50} src={item.image} alt={item.product} /></Link></Table.Cell>
              <Table.Cell><Link href={`/product/${item._id}`}>{item.product}</Link></Table.Cell>
              <Table.Cell className="hidden md:table-cell">{item.category}</Table.Cell>
              <Table.Cell>
                <ProductStatusSelect item={item} />
                </Table.Cell>
              <Table.Cell textAlign="end" className="hidden md:table-cell">
                ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Table.Cell>
              
       
              <Table.Cell textAlign="end">
                <Link className="text-blue-500" href={`/product/${item._id}`}>Edit</Link>
                </Table.Cell>
            </Table.Row>
          ))
    }

  return (
    <div className="w-full flex flex-col mx-auto">
        All Products
        <input placeholder='Filter products by category, status, title...' value={query} onChange={(e)=> setQuery(e.target.value)}  className="w-11/12 p-2 mb-2 rounded-md border-2 border-safariOrange max-w-[800px] mx-auto" />
        {isLoading ? <FlexColumn><PageSpinner /></FlexColumn> : null}
        <Table.Root size="sm" >
      <Table.Header bg="tomato">
        <Table.Row>
          <Table.ColumnHeader className="hidden md:table-cell">Image</Table.ColumnHeader>
          <Table.ColumnHeader>Product</Table.ColumnHeader>
          <Table.ColumnHeader className="hidden md:table-cell">Category</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
          
          <Table.ColumnHeader className="hidden md:table-cell" textAlign="end">Price</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Edit</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {content}
      </Table.Body>
    </Table.Root>
    </div>
  )
}

export default AllProducts