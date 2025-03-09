import AdminTabs from '@/components/custom/admin/AdminTabs'
import { PageContainer } from '@/components/custom/UI'
import React from 'react'


const AdminPage = () => {
  return (
    <PageContainer>
        <h1 className="text-3xl ml-8">Admin</h1>
        <AdminTabs />
    </PageContainer>
  )
}

export default AdminPage