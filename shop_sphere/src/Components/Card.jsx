import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const link = 'https://picsum.photos/500/300'

export default function CardContainer() {

    const [products, setProducts] = useState()

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetch('http://localhost:3003/product/').then(response => response.json()).catch(error => console.error(error))
            setProducts(data.products)
        }
        getProducts()
    }, [])

    console.log('', products);
    return (
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3">
            {products?.map((product) => {
                return <Card product={product} />
            })}
        </div>
    );
}

export function Card({ product }) {

    const { brand, category, _id, description, imageUrl, name, price } = product

    const openCard = () => { }
    return (
        <Link to={`/products/${_id}`}>
            <motion.div whileTap={{ scale: 0.95 }} onClick={openCard} className="rounded-xl overflow-hidden m-2 shadow-lg">
                <div className="p-5 flex flex-col ">
                    <div className="rounded=xl">
                        <img src='../assets/images/iphone.jpg' alt="img" />
                    </div>
                    <h5 className="text-xs hover:cursor-pointer md:text-sm font-thin underline decoration-[0.2px] underline-offset-1 mt-2 ">{brand}</h5>
                    <h3 className="text-base md:text-lg font-medium ">{name}</h3>
                    <h4 className="text-sm md:text-base font-normal text-neutral-600">{description}</h4>
                </div>

            </motion.div>
        </Link>
    )
}

