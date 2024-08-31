import React from 'react'
import Container from '../Layout/Container'
import who from '../../assets/who.png'
import element from '../../assets/element.png'
import logos from '../../assets/logos.png'

const Who = () => {
  return (
    <div className='pt-[100px] pb-20'>
        <Container>
            <div className='flex gap-48'>
                <img src={who} alt=''/>
                <div>
                <img src={element} alt='' />
                <br/>
                <h2 className='font-sans font-extrabold text-secondary text-[48px]'>Who We Are</h2>
                <br/>
                <p  className='font-pap font-regular text-gray text-[18px] w-[442px]'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified.</p>
                <br/>
                <img  src={logos} alt=''/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Who