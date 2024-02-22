import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const link = 'https://picsum.photos/500/300'

export default function ProductDetails() {

    const { id } = useParams()
    const [productData, setproductData] = useState({});
    useEffect(() => {
        const getPrdouct = async () => {
            const data = await fetch(`http://localhost:3003/product/${id}`).then(res => res.json()).catch(err => console.error(err))
            setproductData(data.product)
        }
        getPrdouct()
        console.log(productData);
    }, [id])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2  mx-auto">
                <div className="m-2">
                    <img src={link} alt="img" className="w-full rounded-lg" />
                    <div className=" grid grid-cols-3  mt-1 rounded-lg ">
                        <img src={link} className="p-[0.8px] rounded-lg" alt="img" />
                        <img src={link} className="p-[0.8px] rounded-lg" alt="img" />
                        <img src={link} className="p-[0.8px] rounded-lg" alt="img" />
                    </div>
                </div>
                <div className="m-2 space-y-2 ">
                    <Link to={`/products`}><h2 className="text-xs hover:text-[#f75748] md:text-sm font-thin underline decoration-[0.2px]">{productData?.brand} </h2></Link>
                    <h2 className="text-3xl md:text-4xl">{productData?.name} </h2>
                    <h2 className="text-sm md:text-base font-light ">{productData?.description} </h2>

                    <div className="rounded-xl w-full md:w-1/2 flex flex-col p-5 shadow-lg">
                        Select Color:
                        <div className="flex justify-between m-3">
                            <div>
                                <label children='Gray' for="Gray" />
                                <input type="checkbox" className="ms-3" name="Gray" id="color" />
                            </div>
                            <div>
                                <label children='Gray' for="Gray" />
                                <input type="checkbox" className="ms-3 rounded-full" name="Gray" id="color" />
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl w-auto p-5 shadow-lg">
                        Select specificatios:
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className=" flex mt-2 md:justify-end justify-center mx-auto w-full">
                <button class="bg-gray-900 w-40 hover:bg-white rounded-full hover:text-black text-white py-2 px-4 ">
                    Button
                </button>
            </div>
        </div>
    )
}
