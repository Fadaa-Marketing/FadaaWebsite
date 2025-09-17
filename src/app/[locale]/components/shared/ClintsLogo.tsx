import { InfiniteMovingCards } from '@/components/ui/infinite-moving'
import { getBrands } from '@/lib/api';
import React from 'react'

const ClientsLogo = async() => {
    const brands = await getBrands();
    
  return (
    <div>
      <InfiniteMovingCards
        items={brands}
        direction="right"
        speed="normal"
      />
    </div>
  )
}

export default ClientsLogo
