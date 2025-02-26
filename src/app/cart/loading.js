import { FlexColumn, PageContainer } from '@/components/custom/UI'
import PageSpinner from '@/components/Loading/PageSpinner'
import React from 'react'

const LoadingCart = () => {
  return (
    <PageContainer>
    <FlexColumn>
        <PageSpinner />
        
    </FlexColumn>
    </PageContainer>
  )
}

export default LoadingCart