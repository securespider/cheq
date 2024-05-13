import React, { useState, useEffect } from 'react'; // Import useEffect hook
import { CardList } from '@/components/CardList';
// import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site';
import { EXAMPLE_ITEMS } from './examples/examples';

export default function Home() {

  return (
    <>
      {/* <h2 className='text-2xl mb-2'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p> */}

      {/* Examples section */}
      <div className='mt-4'>
        <h2 className='text-lg mb-2'>CHEQ</h2>
        <p className='mb-4'>
          This is the home page of our prototype application 'CHEQ'. Here you are able to mint NFT for verified items by clicking the mint NFT button below. 
          You are also able to check out the items that you currently own by clicking on the 'Profile' tab at the top of the home page.
        </p>

        <CardList items={EXAMPLE_ITEMS} />
      </div>
    </>
  );
}
