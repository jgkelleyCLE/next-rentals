"use client"
import { useGetOrdersQuery } from '@/redux/ordersApi'
import React, { useState } from 'react'
import { FlexColumn } from '../UI'
import PageSpinner from '@/components/Loading/PageSpinner'
import { Table } from "@chakra-ui/react"
import Link from 'next/link'
import StatusSelect from './StatusSelect'


const AllOrders = () => {

    const { data: orders, isLoading, isError, isSuccess, error } = useGetOrdersQuery()


    const [query, setQuery] = useState("")

    const filteredOrders = orders?.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.status.toLowerCase().includes(query.toLowerCase()) || item.orderItems.some(orderItem => orderItem.product?.toLowerCase().includes(query.toLowerCase())))

    let content;
    if(isSuccess){
        content = filteredOrders?.map((item) => (
            <Table.Row key={item._id}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{new Date(item.createdAt).toLocaleDateString()}</Table.Cell>
              <Table.Cell className="hidden md:table-cell">{new Date(item.eventDate).toLocaleDateString()}</Table.Cell>
              <Table.Cell>
                <StatusSelect item={item} />
               
                </Table.Cell>
             
              <Table.Cell className="hidden md:table-cell" textAlign="end"> ${item.totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Table.Cell>
              <Table.Cell textAlign="end"><Link className="text-blue-500" href={`/order-details/${item._id}`}>Edit</Link></Table.Cell>
            </Table.Row>
          ))
    }

    

  return (
    <div className="w-full flex flex-col mx-auto">
        All Orders
        <input placeholder='Filter orders by status, title, or contain a certain product...' value={query} onChange={(e)=> setQuery(e.target.value)}  className="w-11/12 p-2 mb-2 rounded-md border-2 border-safariOrange max-w-[800px] mx-auto" />
        {isLoading ? <FlexColumn><PageSpinner /></FlexColumn> : null}
        <Table.Root size="sm" striped>
      <Table.Header bg="tomato">
        <Table.Row>
          <Table.ColumnHeader>Title</Table.ColumnHeader>
          <Table.ColumnHeader>Created</Table.ColumnHeader>
          <Table.ColumnHeader className="hidden md:table-cell">Event Date</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
          
          <Table.ColumnHeader className="hidden md:table-cell" textAlign="end">Price</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Link</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {content}
      </Table.Body>
    </Table.Root>
    </div>
  )
}

export default AllOrders