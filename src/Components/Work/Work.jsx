import React from 'react'
import Container from '../Layout/Container'
import element from '../../assets/element.png'
import box1 from '../../assets/box1.png'
import box2 from '../../assets/box2.png'
import box3 from '../../assets/box3.png'
import box4 from '../../assets/box4.png'
import box5 from '../../assets/box5.png'
import box6 from '../../assets/box6.png'

const Work = () => {
    return (
        <div className='pt-[100px] pb-20'>
            <Container>
                <img className='m-auto' src={element} alt='' />
                <br />
                <h1 className='font-sans font-bold text-secondary text-[48px] text-center'>Work Showcase </h1>
                <br />
                <ul className='flex gap-10 pt-5 ml-20'>
                    <li className='font-sans text-gray hover:text-primary text-semibold text-[24px] '><a href='' className='flex'>All </a></li>
                    <li className='font-sans text-gray hover:text-primary text-semibold text-[24px] flex'><a href='' className='flex'>Digital Mkt </a></li>
                    <li className='font-sans text-gray hover:text-primary text-semibold text-[24px] flex'><a href='' className='flex'>Branding</a></li>
                    <li className='font-sans text-gray hover:text-primary text-semibold text-[24px] flex'><a href='' className='flex'>Content Mkt </a></li>
                    <li className='font-sans text-gray hover:text-primary text-semibold text-[24px] flex'><a href='' className='flex'>Social Media Mkt </a></li>
                </ul>
                <br/>
                <div className='flex gap-5 justify-center'>
                    <img src={box1} alt=''/>
                    <img src={box2} alt=''/>
                    <img src={box3} alt='' />
                </div>
                <br/>
                <div className='flex gap-5 justify-center'>
                    <img src={box4} alt=''/>
                    <img src={box5} alt='' />
                    <img src={box6} alt='' />
                </div>

            </Container>
        </div>
    )
}

export default Work