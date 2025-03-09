"use client"
import { getOrder } from '@/actions/getOrder'
import StatusSelect from '@/components/custom/admin/StatusSelect'
import { FlexColumn, PageContainer } from '@/components/custom/UI'
import { useGetOrderByIdQuery } from '@/redux/ordersApi'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const OrderDetailsPage = () => {

    
    const params = useParams()
    const id = params.id

    // const order = await getOrder(id)
    const { data: order } = useGetOrderByIdQuery(id)

    let content;


  return (
    <div>
        <PageContainer>
            <h1 className="text-3xl ml-8">{order?.title} Order Details</h1>
            <div className="flex flex-col items-start ml-8">
                <p className="text-sm italic">Order ID: {order?._id}</p>
                <p className="text-sm italic">Order Date: {new Date(order?.createdAt).toLocaleString()}</p>
                <p className="text-sm italic">Event Date: {new Date(order?.eventDate).toLocaleDateString()}</p>
                {
                  order ? <StatusSelect item={order} /> : null
                }
                
            </div>
            <div>
              {
                order?.orderItems?.map((item) => (
                    <div key={item._id} className="flex flex-row items-center justify-between border-b border-gray-200 p-4 w-11/12 mx-auto">
                        <div className="flex flex-row items-center">
                            <Image width={300} height={200} src={item.image} alt={item.product} className="w-20 h-20 object-contain" />
                            <div className="ml-4">
                                <p className="text-md md:text-xl font-bold">{item.product}</p>
                                <p className="text-sm italic">Qty: {item.cartQuantity}</p>
                            </div>
                        </div>
                        <p className="text-md md:text-xl font-bold">${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                ))
              }
            </div>
        </PageContainer>
    </div>
  )
}

export default OrderDetailsPage