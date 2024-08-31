import React from 'react'
import Container from '../Layout/Container'

const CopyRight = () => {
  return (
    <div className='pt-[50px] pb-10'>
    <Container>
      <div className='flex justify-between'>
        <div>
            <p className='font-sans font-regular text-gray text-[16px]'>@2023 Innovate.All rights reserved.</p>
        </div>
        <div className='flex gap-40'>
        <p className='font-sans font-regular text-gray text-[16px]'>Privacy policy</p>
        <p className='font-sans font-regular text-gray text-[16px]'>Terms & condition</p>
        </div>
      </div>
    </Container> 
    </div>
  )
}

export default CopyRight
