'use client'

import { MintNFT } from '@/components/MintNft'

export default function NFTExample() {
    

  return (
    <div className='flex-column align-center '>
      <h2 className='text-2xl mb-2'>Register Item</h2>
      <p>Please input your address and item</p>
        <MintNFT /> 
    </div>
  )

}
