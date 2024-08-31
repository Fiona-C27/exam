import React from 'react'
import Container from '../Layout/Container'
import element from '../../assets/element.png'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'

const Client = () => {
  return (
    <div className='pt-[100px] pb-14'>
        <Container>
            <div className='flex justify-between py-[100px]'>
              <div className='w-[380px] h-[450px] bg-white hover:bg-[#D8EAFF] rounded-xl py-5 px-2 text-center drop-shadow-2xl'>
              <img className='pl-7' src={element} alt='' />
                <br/>
                <h1 className='text-secondary text-[48px] font-extrabold font-sans'>Client Review</h1>
                <br/>
                <p className='text-gray text-[16px] font-regular font-pap w-[331px] m-auto'>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  </p>
                <br/>
                <img className='pl-7' src={client1} alt=''/>
              </div>
              <div className='w-[380px] h-[450px] bg-white hover:bg-[#D8EAFF] rounded-xl py-5 px-2 text-center drop-shadow-2xl'>
                <div className='pt-10'>
                <p className='text-gray text-[18px] font-regular font-pap w-[270px] m-auto'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                <br/>
                <img className='pl-16' src={client2} alt=''/>
                </div>
              </div>
              <div className='w-[380px] h-[450px] bg-white hover:bg-[#D8EAFF] rounded-xl py-5 px-2 text-center drop-shadow-2xl'>
                <div className='pt-10'>
                <p className='text-gray text-[18px] font-regular font-pap w-[270px] m-auto'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                <br/>
                <img className='pl-16' src={client3} alt=''/>
                </div>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Client