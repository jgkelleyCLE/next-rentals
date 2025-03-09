import { useUpdateProductStatusMutation } from '@/redux/productApi'
import React, { useEffect } from 'react'
import { toast } from 'sonner'

const ProductStatusSelect = ({ item }) => {

  const [updateStatus, { data: productData, isLoading, isSuccess, isError, error }] = useUpdateProductStatusMutation()

    const statuses = [
      'Active',
      'Inactive'
    ]

    const statusHandler = (productId, newStatus) => {

        updateStatus({ id: productId, status: newStatus })

    }

    useEffect(()=> {

      if(isSuccess){
        toast.success("Status updated")
      }

      if(isError){
        toast.error("Error updating status")
      }

    }, [isSuccess, isError])

  return (
    <select
        value={item.status} 
        onChange={(e) => statusHandler(item._id, e.target.value)}
        disabled={isLoading}
        className="border border-gray-300 rounded-md px-1"
    >
        {statuses.map((status) => (
            <option 
            key={status} 
            value={status}
                        
            >
            {status}
         </option>
    ))}
    </select>
  )
}

export default ProductStatusSelect