import React from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='pt-[100px] pb-20'>
            <Container>
                <div className='flex gap-40'>
                    <div>
                        <img src={logo} alt='' />
                        <br />
                        <br />
                        <p className='font-sans font-regular text-gray text-[18px] text-center w-[475px]'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                    </div>
                    <div className='flex gap-40'>
                        <div>
                            <ul className=' pt-5'>
                                <h2 className='font-sans text-secondary  font-bold text-[18px] pb-5'>Features</h2>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3'><a href=''>Home  </a></li>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3'><a href=''>About </a></li>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3 '><a href=''>Benifit </a></li>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3'><a href=''>Pricing</a></li>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3'><a href=''>Blog </a></li>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3'><a href=''>Blog </a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className=' pt-5'>
                                <h2 className='font-sans text-secondary  font-bold text-[18px] pb-5'>Products</h2>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3'><a href=''>Task Management </a></li>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3 w-[167px]'><a href=''>Company growth </a></li>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3 w-[167px]'><a href=''>Time tracking </a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className=' pt-5'>
                                <h2 className='font-sans text-secondary font-bold text-[18px] pb-5'>Support</h2>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3 w-[167px]'><a href=''>Customer service</a></li>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3'><a href=''>Accessibility</a></li>
                                <li className='font-sans text-gray hover:text-primary font-semibold text-[18px] pb-3 '><a href=''>Contact us </a></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
