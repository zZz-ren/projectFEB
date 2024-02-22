import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { GiBackForth } from "react-icons/gi";
import { TbCategoryFilled, TbShoppingBag, TbHeart, TbUserSquareRounded } from "react-icons/tb";
import { motion } from 'framer-motion'
import Header from '../Components/Header';

const variants = {
    expanded: { width: '98%' },
    nonExpanded: { width: '15%' }
}
const variants2 = {
    expanded: { width: '15%' },
    nonExpanded: { width: '5%' }
}

export default function Layout() {
    return (
        <div className='w-full flex'>
            <NavigationBar />
            <NavigationBar2 />
            <main className='grow flex flex-col justify-center mx-auto'>
                <Header />
                <Dashoard />
            </main>
        </div>
    )
}

function NavigationBar() {
    const [isExpanded, setIsExpanded] = useState(false)

    // const func = (isActive) => isActive === 'active' ? "bg-[#f75748] rounded text-white font-semibold" : "bg-black"

    return (
        <motion.div animate={isExpanded ? "expanded" : "nonExpanded"} variants={variants} className='py-12 flex flex-col bg-white opacity-95 border items-center border-r-2 md:hidden w-full md:w-2/5 h-screen  fixed'>
            <div className={`flex space-x-2 items-center `}>
                <img src='/assets/images/logo.png' className='w-10' alt='logo' />
                <span className={`${isExpanded ? 'block' : 'hidden'}`}>Shop Sphere</span>
            </div>
            <div className="flex items-center justify-center rounded-full p-2 bg-[#f75748] text-white w-6 h-6 top-12 -right-3 absolute" onClick={() => setIsExpanded(val => !val)}><GiBackForth size={'32px'} /></div>
            <div className="mt-10 flex flex-col t space-y-8 ">
                <NavLink to={`/products`} className={`flex space-x-3 items-center p-2`}>
                    <TbShoppingBag />
                    <span className={isExpanded ? 'block' : 'hidden'}>Categories</span>
                </NavLink>

                <NavLink to={`/cart`}><div className={`flex space-x-3 items-center p-2 `}>
                    <TbShoppingBag />
                    <span className={isExpanded ? 'block' : 'hidden'}>Cart</span>
                </div>
                </NavLink>
                <NavLink to={`/wishlist`}>
                    <div className='flex space-x-3 items-center p-2'>
                        <TbHeart />
                        <span className={isExpanded ? 'block' : 'hidden'}>Wishlist</span>
                    </div>
                </NavLink>
                <NavLink to={`/profile`}>
                    <div className='flex space-x-3 items-center p-2'>
                        <TbUserSquareRounded />
                        <span className={isExpanded ? 'block' : 'hidden'}>Profile</span>
                    </div>
                </NavLink>
            </div >
        </motion.div >
    );
}

function NavigationBar2() {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <motion.div animate={isExpanded ? "expanded" : "nonExpanded"} variants={variants2} className='py-12 hidden md:flex flex-col bg-white bg-opacity-95 border items-center border-r-2 w-full md:w-2/5 h-screen  fixed'>
            <NavLink to={`/home`}><div className={`flex space-x-2 items-center `}>
                <img src='/assets/images/logo.png' className='w-10' alt='logo' />
                <span className={`${isExpanded ? 'block' : 'hidden'}`}>Shop Sphere</span>
            </div>
            </NavLink>
            <div className="flex items-center justify-center rounded-full p-2 bg-[#f75748] text-white w-6 h-6 top-12 -right-3 absolute" onClick={() => setIsExpanded(val => !val)}><GiBackForth size={'32px'} /></div>
            <div className="mt-10 flex flex-col t space-y-8 ">
                <NavLink to={`/categories`}><div className='flex space-x-3 items-center p-2 bg-[#f75748] rounded text-white font-semibold'>
                    <TbCategoryFilled />
                    <span className={isExpanded ? 'block' : 'hidden'}>Categories</span>
                </div>
                </NavLink>

                <NavLink to={`/cart`}><div className='flex space-x-3 items-center p-2'>
                    <TbShoppingBag />
                    <span className={isExpanded ? 'block' : 'hidden'}>Cart</span>
                </div>
                </NavLink>
                <NavLink to={`/wishlist`}>
                    <div className='flex space-x-3 items-center p-2'>
                        <TbHeart />
                        <span className={isExpanded ? 'block' : 'hidden'}>Wishlist</span>
                    </div>
                </NavLink>
                <NavLink to={`/profile`}>
                    <div className='flex space-x-3 items-center p-2'>
                        <TbUserSquareRounded />
                        <span className={isExpanded ? 'block' : 'hidden'}>Profile</span>
                    </div>
                </NavLink>
            </div>
        </motion.div>
    );
}

function Dashoard() {
    return <div className='flex flex-col ps-14 pe-2 w-full'>
        <Outlet />
    </div>
}