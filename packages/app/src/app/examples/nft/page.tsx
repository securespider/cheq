'use client'

import { MintNFT } from '@/components/MintNft'

export default function NFTExample() {

  return (
    <div className='flex-column align-center '>
      <h2 className='text-2xl mb-2'>NFT</h2>
      <p>This example is demonstrates how to mint NFT.</p>
      <button className='btn btn-sm btn-info'>
          Mint
        </button>
        <MintNFT /> 
    </div>

  )
}
