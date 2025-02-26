import GalleryLinks from '@/components/custom/Gallery/GalleryLinks'
import { PageContainer } from '@/components/custom/UI'
import React from 'react'

export const metadata = {
  title: 'Gallery | Tentlify Rentals',
  description: 'Gallery page',
  keywords: 'cleveland party rental, party rental cleveland'
}

const GalleryPage = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl ml-8">Gallery</h1>
      <GalleryLinks />
    </PageContainer>
  )
}

export default GalleryPage