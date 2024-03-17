import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const link = "https://localhost:3003/";

export default function ProductDetails() {
  const { id } = useParams();
  const [msg, setMsg] = useState("loading...");
  const [productData, setproductData] = useState({});
  const { brand, category, name, imageUrl, price, variants, description, _id } =
    productData;
  const [bigImg, setBigImg] = useState();
  useEffect(() => {
    const getPrdouct = () => {
      const data = fetch(`http://localhost:3003/product/${id}`)
        .then((res) => res.json())
        .then((data) => setproductData(data.product))
        .then(setMsg())
        // .then(setBigImg(productData.imageUrl[0]))
        .catch((err) => {
          setMsg("Error getting Data");
          console.log(err.message);
        });
    };
    getPrdouct();
  }, [id]);

  useEffect(() => {
    productData.imageUrl && setBigImg(productData.imageUrl[0]);
  }, [productData]);

  const handleImage = (id) => {
    console.log(id);
    setBigImg((img) => (img = imageUrl[id]));
  };

  return msg ? (
    <div className="h-[80vh] flex justify-center items-center text-3xl text-red-500 ">
      {msg}↗️↗️
    </div>
  ) : (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
        <div className="m-2 flex mt-10 flex-col  items-center">
          <img
            src={`http://localhost:3003/${
              bigImg ? bigImg : "uploads/notFound.png"
            }`}
            alt="img"
            className="md:h-[350px] h-36 bg-slate-600 rounded-lg"
          />
          <div className=" grid grid-cols-5  mt-1 rounded-lg ">
            {imageUrl?.map((img, i) => (
              <img
                key={i}
                onClick={() => handleImage(i)}
                src={`http://localhost:3003/${
                  img ? img : "uploads/notFound.png"
                }`}
                className={`p-[0.8px] md:h-24 h-10  rounded-lg ${
                  bigImg === img ? "border bg-gray-400" : ""
                }`}
                alt="img"
              />
            ))}
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
            <VariantForm variants={variants} />
          </div>
          {/* <div className="rounded-xl w-auto p-5 shadow-lg">
            Select specificatios:
            <div></div>
            <div></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function VariantForm({ variants }) {
  const [selectedVar, setSelectedVar] = useState();

  const handleAddtoCart = (e) => {
    e.preventDefault();
    if (selectedVar) {
      console.log(selectedVar);
    } else {
      alert("Select variant first");
    }
  };

  return (
    <form className=" justify-between m-3">
      {variants?.map((varnt) => {
        return (
          <Variants
            key={varnt._id}
            setSelectedVar={setSelectedVar}
            selectedVar={selectedVar}
            variant={varnt}
          />
        );
      })}
      <div className=" flex mt-10 md:justify-end justify-center mx-auto w-full">
        <button
          onClick={(e) => handleAddtoCart(e)}
          class="bg-gray-900 me-3 w-40 hover:bg-slate-800 shadow-lg hover:text-white text-white py-2 px-4 "
        >
          Add to Cart
        </button>
      </div>
    </form>
  );
}

function Variants({ variant, selectedVar, setSelectedVar }) {
  const { name, price, features, _id } = variant;
  return (
    <div
      onClick={() => setSelectedVar(_id)}
      className="shadow-lg m-2 p-1 rounded-xl flex justify-start"
    >
      <input type="radio" checked={selectedVar === _id} className="me-2" />
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
