import React from 'react'
import Container from '../Layout/Container'
import logo from '../../assets/logo.png'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
        <Container>
          <div className='flex justify-between pt-10'>
          <div>
            <img src={logo} alt='' />
          </div>
          <div>
            <ul className='flex gap-10 pt-5'>
                <li className='font-sans text-secondary hover:text-primary font-semibold text-[18px] '><a href='' className='flex'>Home <IoIosArrowDown className='ml-[5px] w-[26px] mt-1 cursor-pointer'/> </a></li>
                <li className='font-sans text-secondary hover:text-primary font-semibold text-[18px] flex'><a href='' className='flex'>About <IoIosArrowDown className='ml-[5px] w-[26px] mt-1 cursor-pointer'/></a></li>
                <li className='font-sans text-secondary hover:text-primary font-semibold text-[18px] flex'><a href='' className='flex'>Service <IoIosArrowDown className='ml-[5px] w-[26px] mt-1 cursor-pointer'/></a></li>
                <li className='font-sans text-secondary hover:text-primary font-semibold text-[18px] flex'><a href='' className='flex'>Portfolio <IoIosArrowDown className='ml-[5px] w-[26px] mt-1 cursor-pointer'/></a></li>
                <li className='font-sans text-secondary hover:text-primary font-semibold text-[18px] flex'><a href='' className='flex'>Price <IoIosArrowDown className='ml-[5px] w-[26px] mt-1 cursor-pointer'/></a></li>
                <li className='font-sans text-secondary hover:text-primary font-semibold text-[18px] flex'><a href='' className='flex'>Blog <IoIosArrowDown className='ml-[5px] w-[26px] mt-1 cursor-pointer'/></a></li>
            </ul>
          </div>
          <div>
            <button className='font-sans bg-primary hover:bg-secondary font-semibold text-[18px] w-[200px] h-[80px] rounded-full text-white'>Contact Us</button>
          </div>
          </div>
        </Container>
    </div>
  )
}

export default Navbar