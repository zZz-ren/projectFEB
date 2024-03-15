import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

// const link = 'https://picsum.photos/500/300'

export default function CardContainer() {
  const [products, setProducts] = useState();
  const [isLoading, SetIsLoading] = useState();
  const [isError, setIsError] = useState();
  const [searchParam, setsearchParams] = useSearchParams();
  useEffect(() => {
    const getProducts = async () => {
      try {
        SetIsLoading(true);
        const data = await fetch(
          `http://localhost:3003/product/?category=${searchParam.get(
            "category"
          )}`
        ).then((response) => response.json());

        setProducts(data.products);
        SetIsLoading(false);
        setIsError(false);
      } catch (error) {
        SetIsLoading(false);
        setIsError(true);
      }
    };
    getProducts();
  }, []);

  console.log("", products);

  return isLoading ? (
    <Loader />
  ) : !isError ? (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => {
        return <Card product={product} />;
      })}
    </div>
  ) : (
    <div className="justify-center items-center flex  h-[80vh] ">
      <div className="bg-red-500 text-white p-4 m-4 ">
        Error Fetching data ⬅️
      </div>
    </div>
  );
}

function Loader() {
  return (
    <div className="w-full h-full justify-center items-center flex">
      Loading...
    </div>
  );
}

export function Card({ product }) {
  const { brand, category, _id, description, imageUrl, name, price } = product;

  return (
    <Link to={`/products/${_id}`}>
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="rounded-xl overflow-hidden m-2 shadow-lg"
      >
        <div className="p-5 flex flex-col ">
          <div className="rounded=xl">
            <img
              src={`http://localhost:3003/${
                imageUrl ? imageUrl : "uploads\\notFound.png"
              }`}
              alt="img"
            />
          </div>
          <h5 className="text-xs hover:cursor-pointer md:text-sm font-thin underline decoration-[0.2px] underline-offset-1 mt-2 ">
            {brand}
          </h5>
          <h3 className="text-base md:text-lg font-medium ">{name}</h3>
          <h4 className="text-sm md:text-base font-normal text-neutral-600">
            {description}
          </h4>
        </div>
      </motion.div>
    </Link>
  );
}
