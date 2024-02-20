import React, { useState } from 'react'
import { GiAbbotMeeple, GiBackForth } from "react-icons/gi";
import { motion } from 'framer-motion'
import CardContainer from '../Components/Card';
import ProductDetails from './ProductDetails';

const variants = {
    expanded: { width: '17%' },
    nonExpanded: { width: '5%' }
}

export default function Products() {
    return (
        <div className='w-full flex'>
            <NavigationBar />
            <main className='grow flex flex-col justify-center mx-auto'>
                <Header />
                <Dashoard />
            </main>
        </div>
    )
}

function NavigationBar() {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <motion.div animate={isExpanded ? "expanded" : "nonExpanded"} variants={variants} className='py-12 flex flex-col bg-white opacity-95 border items-center border-r-2 w-full md:w-2/5 h-screen  fixed'>
            <div className={`flex space-x-2 items-center `}>
                <img src='./assets/images/logo.png' className='w-10' alt='logo' />
                <span className={`${isExpanded ? 'block' : 'hidden'}`}>Profile</span>
            </div>
            <div className="flex items-center justify-center rounded-full p-2 bg-[#de5a4e] text-white w-6 h-6 top-12 -right-3 absolute" onClick={() => setIsExpanded(val => !val)}><GiBackForth size={'32px'} /></div>
            <div className="mt-10 flex flex-col t space-y-8 ">
                <div className='flex space-x-3 items-center p-2 bg-[#de5a4e] rounded text-white font-semibold'>
                    <GiAbbotMeeple />
                    <span className={isExpanded ? 'block' : 'hidden'}>Item</span>
                </div>
                <div className='flex space-x-3 items-center p-2'>
                    <GiAbbotMeeple />
                    <span className={isExpanded ? 'block' : 'hidden'}>Item</span>
                </div>
                <div className='flex space-x-3 items-center p-2'>
                    <GiAbbotMeeple />
                    <span className={isExpanded ? 'block' : 'hidden'}>Item</span>
                </div>
                <div className='flex space-x-3 items-center p-2'>
                    <GiAbbotMeeple />
                    <span className={isExpanded ? 'block' : 'hidden'}>Item</span>
                </div>
            </div>
        </motion.div>
    );
}

function Header() {
    return (
        <div className='flex ps-20 p-2 justify-between border-2 border-x-0 '>
            <h2 className='text-lg font-medium text-[#f75748]'>Product Page</h2>
            <input type="text" className='p-2 text-white outline-none rounded-xl bg-[#4ED2DE] placeholder:text-white' placeholder='search' />
        </div>
    );
}

function Dashoard() {
    return <div className='flex flex-col py-5 px-20'>
        {/* <CardContainer /> */}
        <ProductDetails />
    </div>
}