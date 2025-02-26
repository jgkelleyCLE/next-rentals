import GalleryLinks from '@/components/custom/Gallery/GalleryLinks'
import { PageContainer } from '@/components/custom/UI'
import React from 'react'

const GalleryPage = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl ml-8">Gallery</h1>
      <GalleryLinks />
    </PageContainer>
  )
}

export default GalleryPage