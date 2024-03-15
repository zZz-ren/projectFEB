import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const link = "https://localhost:3003/";

export default function ProductDetails() {
  const { id } = useParams();
  const [msg, setMsg] = useState("loading...");
  const [productData, setproductData] = useState({});
  useEffect(() => {
    const getPrdouct = () => {
      const data = fetch(`http://localhost:3003/product/${id}`)
        .then((res) => res.json())
        .then((data) => setproductData(data.product))
        .then(setMsg())
        .catch((err) => {
          setMsg("Error getting Data");
          console.log(err.message);
        });
    };
    getPrdouct();
  }, [id]);
  const { brand, category, name, imageUrl, price, variants, description, _id } =
    productData;
  console.log(imageUrl);

  return msg ? (
    <div className="h-[80vh] flex justify-center items-center text-3xl text-red-500 ">
      {msg}↗️↗️
    </div>
  ) : (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  mx-auto">
        <div className="m-2">
          <img
            src={`http://localhost:3003/${imageUrl}`}
            alt="img"
            className="w-full rounded-lg"
          />
          <div className=" grid grid-cols-3  mt-1 rounded-lg ">
            <img
              src={`http://localhost:3003/${imageUrl}`}
              className="p-[0.8px] rounded-lg"
              alt="img"
            />
            <img
              src={`http://localhost:3003/${imageUrl}`}
              className="p-[0.8px] rounded-lg"
              alt="img"
            />
            <img
              src={`http://localhost:3003/${imageUrl}`}
              className="p-[0.8px] rounded-lg"
              alt="img"
            />
          </div>
        </div>
        <div className="m-2 space-y-2 ">
          <p className="text-xs hover:text-[#f75748] md:text-sm font-thin underline decoration-[0.2px]">
            {" "}
            <span></span>
            <Link to={`/products`}>
              <span>{brand} </span>
            </Link>
          </p>
          <h2 className="text-3xl md:text-4xl">{name} </h2>
          <h2 className="text-sm md:text-base font-light ">{description} </h2>

          <div className="rounded-xl w-full flex flex-col p-4">
            Select Variant:
            <div className=" justify-between m-3">
              {variants?.map((varnt) => {
                return <Variants key={varnt._id} variant={varnt} />;
              })}
            </div>
          </div>
          {/* <div className="rounded-xl w-auto p-5 shadow-lg">
                        Select specificatios:
                        <div></div>
                        <div></div>
                    </div> */}
        </div>
      </div>
      <div className=" flex mt-2 md:justify-end justify-center mx-auto w-full">
        <button class="bg-gray-900 w-40 hover:bg-slate-800 shadow-lg hover:text-white text-white py-2 px-4 ">
          Button
        </button>
      </div>
    </div>
  );
}

function Variants({ variant }) {
  const { name, price, features } = variant;
  return (
    <div className="shadow-lg m-2 p-1 rounded-xl flex justify-start">
      <input type="radio" value={name} className="me-2" />
      <div>
        <h2 className="font-medium">
          {" "}
          {name}{" "}
          <span className="md:ms-7 text-[#f75748]">Price : ₹{price}</span>
        </h2>
        {features.map((feature, i) => {
          return (
            <div key={feature.name + i} className="text-sm">
              {feature.name} : {feature.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
