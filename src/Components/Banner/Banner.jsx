import React from 'react'
import girl from '../../assets/girl.png'
import Container from '../Layout/Container'
import element from '../../assets/element.png'
const Banner = () => {
  return (
    <div style = {{
      background : 'url(./src/assets/banner.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      //paddingTop: '50px',
      //paddingBottom: '150px'
    }}>
        <img src={girl} alt='' />
        
        <Container>
            <div >
            <div>
                <img src={element} alt='' />
                <h1 className='font-sans font-extrabold text-secondary text-[70px] w-[686px]'>We Are Digital <span className='text-primary'>Marketing</span> Agency</h1>
                <br/>
                <br/>
                <p className='font-pap font-regular text-gray text-[20px] w-[571px]'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
                <br/>
                <br/>
                <button className='font-sans bg-primary hover:bg-secondary font-semibold text-[18px] w-[200px] h-[80px] rounded-full text-white'>Get free quoto</button>
            </div>
            <div>
                
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner