import React from 'react';
import { Tabs } from '@chakra-ui/react';
import { FaListOl } from 'react-icons/fa';
import { CiShoppingTag } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';
import AdminSearch from './AdminSearch';
import AdminOrders from './AdminOrders';
import AdminProducts from './AdminProducts';

const AdminTabs = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Tabs.Root lazyMount defaultValue="orders" variant="plain" fitted>
        <Tabs.List className="bg-safariOrange dark:bg-safariOrangeHover border-2 " rounded="l3" p="1">
          <Tabs.Trigger value="orders">
            <FaListOl className="text-lg" />
            <h1 className="font-bold">Orders</h1>
          </Tabs.Trigger>

          <Tabs.Trigger value="products">
            <CiShoppingTag className="text-xl" />
            <h1 className="font-bold">Products</h1>
          </Tabs.Trigger>

          <Tabs.Trigger value="search">
            <IoIosSearch className="text-xl" />
            <h1 className="font-bold">Search</h1>
          </Tabs.Trigger>
          <Tabs.Indicator rounded="l2" className="bg-muted" />
        </Tabs.List>

        <Tabs.Content value="orders">
          <AdminOrders />
        </Tabs.Content>

        <Tabs.Content value="products">
          <AdminProducts />
        </Tabs.Content>

        <Tabs.Content value="search">
          <AdminSearch />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default AdminTabs;
