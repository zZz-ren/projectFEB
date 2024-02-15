import { useState } from "react";

export default function Carousel({ slides }) {

    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    }
    const next = () => {
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    }

    return (
        <div className='w-screen h-screen overflow-hidden'>
            <div className=" flex items-center">{curr}</div>
            <div className='flex h-full ease-out duration-500 items-center justify-center' >
                <button className="p-3 rounded-full bg-white/80 text-gray-700 hover:bg-white" onClick={prev}>&larr;</button>
                <img className="w-3/4" src={slides[curr].src} alt={slides[curr].alt} />
                <button className="p-3 rounded-full bg-white/80 text-gray-700 hover:bg-white" onClick={next}>&rarr;</button>
            </div>

        </div>)
}
