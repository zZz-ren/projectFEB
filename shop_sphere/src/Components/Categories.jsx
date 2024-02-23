import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
export default function Categories() {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const getCategory = async () => {
            const data = await fetch('http://localhost:3003/product/category').then(res => res.json()).catch(err => console.error(err))
            setCategories(data.data)
            console.log(data);
        }
        getCategory()
    }, [])


    return (
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3">
            {categories?.map(category => <CatCard category={category} />)}
        </div>
    )
}

function CatCard({ category }) {
    return <motion.div whileTap={{ scale: 0.95 }} className="rounded-xl overflow-hidden m-2 relative shadow-lg">
        <NavLink to={`/products/?category=${category}`}>
            <div className="p-5 flex flex-col ">
                <div className="rounded=xl">
                    <img src='../assets/images/iphone.jpg' className='z-10 ' alt="img" />
                </div>
                <h3 className="text-base md:text-lg font-medium text-center">{category}</h3>
            </div>
        </NavLink>

    </motion.div>
}