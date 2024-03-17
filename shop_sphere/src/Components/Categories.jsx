import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export default function Categories() {
  const [categories, setCategories] = useState();
  const [isLoading, SetIsLoading] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    const getCategory = () => {
      SetIsLoading(true);
      fetch("http://localhost:3003/product/category")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            console.log(data);
            setCategories(data.data);
            SetIsLoading(false);
          }
        })
        .catch((err) => {
          SetIsLoading(false);
          setIsError(err.message);
          console.error(err);
        });
    };
    console.log("run");
    getCategory();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorEl value={isError} />
      ) : (
        <div className="grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-3">
          {categories?.map((category) => (
            <CatCard key={category + 1} category={category} />
          ))}
        </div>
      )}
    </>
  );
}

function Loader() {
  return (
    <div className="w-full h-full justify-center items-center flex">
      Loading...
    </div>
  );
}

function ErrorEl({ value }) {
  return (
    <div className="w-1/3 mx-auto rounded-lg mt-10 bg-red-500 text-white h-full justify-center items-center flex">
      {value}
    </div>
  );
}

function CatCard({ category }) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="rounded-xl overflow-hidden m-2 relative bg-slate-100 shadow-lg"
    >
      <NavLink to={`/products/?category=${category}`}>
        <div className="p-5 flex flex-col ">
          <div className="rounded=xl">
            <img
              src={`http://localhost:3003/uploads\\notFound.png`}
              className="z-10 "
              alt="img"
            />
          </div>
          <h3 className="text-base md:text-lg font-medium text-center">
            {category}
          </h3>
        </div>
      </NavLink>
    </motion.div>
  );
}
