import React from 'react'
import Container from '../Layout/Container'
import element from '../../assets/element.png'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
const Blog = () => {
    return (
        <div className='pt-[100px] pb-20'>
            <Container>
                <div>
                    <img className='m-auto' src={element} alt='' />
                    <br />
                    <h1 className='font-sans font-bold text-secondary text-[48px] text-center'>Our Latest Blog</h1>
                    <br />
                    <p className='font-sans font-regular text-gray text-[18px] text-center m-auto w-[332px]'>We provide digital experience services to startups and small businesses.
                    </p>
                </div>
                <div className='pt-16 flex justify-between'>
                    <div>
                        <img src={blog1} alt='' />
                        <div className='w-[370px] h-[227px] bg-white  rounded-xl py-5 px-2 text-center drop-shadow-2xl '>
                            
                            <h2 className='text-secondary text-[24px] font-medium font-sans w-[223px] m-auto'>How to Be Ahead of Stock Changes</h2>
                            <br />
                            <p className='text-gray text-[18px] font-regular font-sans w-[257px] m-auto '>By John  - 5 Comments</p>
                            <br />
                            <button className='font-sans text-secondary hover:text-primary font-semibold text-[18px]'>Read more</button>
                            
                        </div>
                    </div>

                    <div>
                        <img src={blog2} alt='' />
                        <div className='w-[370px] h-[227px] bg-white  rounded-xl py-5 px-2 text-center drop-shadow-2xl '>
                        <h2 className='text-secondary text-[24px] font-medium font-sans w-[223px] m-auto'> Online Reputation And Management</h2>
                            <br />
                            <p className='text-gray text-[18px] font-regular font-sans w-[257px] m-auto '>By Amin  - 10 Comments</p>
                            <br />
                            <button className='font-sans text-secondary hover:text-primary font-semibold text-[18px]'>Read more</button>
                            
                        </div>
                    </div>

                    <div>
                        <img src={blog3} alt='' />
                        <div className='w-[370px] h-[227px] bg-white  rounded-xl py-5 px-2 text-center drop-shadow-2xl '>
                        <h2 className='text-secondary text-[24px] font-medium font-sans w-[272px] m-auto'>Tips To Move Your Project More Forward
                        </h2>
                            <br />
                            <p className='text-gray text-[18px] font-regular font-sans w-[257px] m-auto '>By Insider  - 15 Comments</p>
                            <br />
                            <button className='font-sans text-secondary hover:text-primary font-semibold text-[18px]'>Read more</button>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Blog
