import { useUpdateOrderStatusMutation } from '@/redux/ordersApi';
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

const StatusSelect = ({ item }) => {
  const [updateOrder, { data: orderData, isLoading, isSuccess, isError, error }] = useUpdateOrderStatusMutation();

  const statuses = ['Quote', 'Reservation', 'Delivered', 'Closed', 'Cancelled'];

  const statusHandler = (orderId, newStatus) => {
    updateOrder({ id: orderId, status: newStatus });
  };

  useEffect(() => {
    if (isError) {
      toast.error('Error updating status');
    }

    if (isSuccess) {
      toast.success('Status updated');
    }
  }, [isSuccess, isError]);

  return (
    <select
      value={item.status}
      onChange={(e) => statusHandler(item._id, e.target.value)}
      disabled={isLoading}
      className="border border-gray-300 rounded-md px-1"
    >
      {statuses.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
};

export default StatusSelect;
