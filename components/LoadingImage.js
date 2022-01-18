import React from 'react'

import ImageCard from './ImageCard';

export default function LoadingImage() {
  const fakeList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  return (
    <>
      { fakeList.map((item, index) => 
        <ImageCard key={index} />
      )}
    </>
  )
}
