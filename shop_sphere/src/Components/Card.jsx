import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

// const link = 'https://picsum.photos/500/300'

export default function CardContainer() {
    return (
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export function Card() {
    const openCard = () => { }
    return (
        <Link to={`/products/id`}>
            <motion.div whileTap={{ scale: 0.95 }} onClick={openCard} className="rounded-xl overflow-hidden m-2 shadow-lg">
                <div className="p-5 flex flex-col ">
                    <div className="rounded=xl">
                        <img src='../assets/images/iphone.jpg' alt="img" />
                    </div>
                    <Link to={`/products/`}><h5 className="text-xs hover:cursor-pointer md:text-sm font-thin underline decoration-[0.2px] underline-offset-1 mt-2 ">product brand</h5></Link>
                    <h3 className="text-base md:text-lg font-medium ">product name</h3>
                    <h4 className="text-sm md:text-base font-normal text-neutral-600">product lore descriptipm libero soluta veritatis nostrum tempore debitis ea iste eum quae recusandae distinctio. Vel, porro?</h4>
                </div>

            </motion.div>
        </Link>
    )
}

