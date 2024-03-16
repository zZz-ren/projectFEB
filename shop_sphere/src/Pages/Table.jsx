import { useEffect, useState } from "react";

export function Table() {
  const [products, setProducts] = useState();
  const [close, setClose] = useState();
  const [id, setId] = useState();

  const getProducts = async () => {
    const result = await fetch(`http://localhost:3003/product/`)
      .then((res) => res.json())
      .catch((err) => console.log(err.messages));
    setProducts(result.products);
  };

  async function handleDelete(id) {
    await fetch(`http://localhost:3003/admin/update/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
        getProducts();
      })
      .catch((err) => console.log(err));
  }
  const handleUpdate = (id) => {
    setClose(true);
    setId(id);
  };
  const handleNew = () => {
    setClose(true);
  };

  useEffect(() => {
    getProducts();
  }, [close]);

  return (
    <>
      {!close ? (
        <div className="m-2 p-2 space-y-2">
          <div className="text-2xl text-center text-violet-600 w-full font-medium">
            Admin Panel
          </div>
          <div className="flex text-xl bg-slate-100 p-3">
            Create New Product
            <button
              onClick={() => handleNew()}
              className=" px-3 py-1 ms-5 text-white bg-green-600"
            >
              New
            </button>
          </div>
          {products?.map((product) => {
            return (
              <div
                key={product._id}
                className="border border-r-8 flex justify-between space-x-5 "
              >
                <div className="flex space-x-4">
                  <img
                    src={`http://localhost:3003/${product.imageUrl[0]}`}
                    className="max-w-40"
                    alt=""
                    srcset=""
                  />
                  <div className="">
                    <h2>
                      <span className="font-medium text-lg">Name:</span>{" "}
                      {product.name}
                    </h2>
                    <h2>
                      <span className="font-medium text-lg">Category:</span>
                      {product.category}
                    </h2>
                    <h2>
                      <span className="font-medium text-lg">Description:</span>{" "}
                      {product.description}
                    </h2>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className=" px-3 py-1 me-2 text-white bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(product._id)}
                    className=" px-3 py-1 me-2 text-white bg-violet-600"
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <UploadForm
          setClose={setClose}
          setId={setId}
          id={id}
          getProducts={getProducts}
          prodId={id}
        />
      )}
    </>
  );
}

const UploadForm = ({ id, setId, setClose }) => {
  const initialState = {
    name: "",
    description: "",
    brand: "",
    price: 0,
    category: "",
    image: "",
    imageUrl: "",
    vairants: [],
  };
  const [data, setData] = useState(initialState);
  const getProduct = async () => {
    const details = await fetch(`http://localhost:3003/product/${id}`).then(
      (res) => res.json()
    );
    const product = details.product;
    setData(product);
  };
  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data);
    const formData = new FormData();
    formData.set("name", data.name);
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("imageUrl", data.imageUrl);
    for (let i = 0; i < data.image.length; i++) {
      formData.append("image", data.image[i]);
    }
    formData.append("image", data.image);
    console.log(formData, data.image);
    if (!id) {
      await fetch("http://localhost:3003/admin/newProduct/", {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          res.json();
          setClose(true);
        })
        .catch((err) => console.log(err));
    } else {
      await fetch(`http://localhost:3003/admin/update/${id}`, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          res.json();
          setClose(false);
          setId("");
        })
        .catch((err) => console.log(err));
      getProduct();
    }
  };

  return (
    <div className="m-5 py-10 px-4 w-full h-screen border">
      <div
        className="text-3xl text-red-600 cursor-pointer"
        onClick={() => {
          setClose(false);
          setId("");
        }}
      >
        &times;
      </div>
      <h2 className="text-xl text-violet-700 font-medium">
        {" "}
        Product upload form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="p-5 mt-5 space-y-2 justify-center flex flex-col bg-gray-300 w-fit  md:w-1/2"
      >
        <div className="flex ">
          <label className="capitalize w-1/3 text-center text-neutral-800">
            Name
          </label>
          <input
            value={data?.name}
            onChange={(e) => {
              setData((d) => (d = { ...d, name: e.target.value }));
            }}
            className="p-2 ms-4 border-violet-600 outline-violet-600 w-2/3"
            type="text"
          />
        </div>
        <div className="flex ">
          <label className="capitalize w-1/3 text-center text-neutral-800">
            Brand
          </label>
          <input
            value={data?.brand}
            onChange={(e) => {
              setData((d) => (d = { ...d, brand: e.target.value }));
            }}
            className="p-2 ms-4 border-violet-600 outline-violet-600 w-2/3"
            type="text"
          />
        </div>
        <div className="flex ">
          <label className="capitalize w-1/3 text-center text-neutral-800">
            Description
          </label>
          <input
            value={data?.description}
            onChange={(e) => {
              setData((d) => (d = { ...d, description: e.target.value }));
            }}
            className="p-2 ms-4 border-violet-600 outline-violet-600 w-2/3"
            type="text"
          />
        </div>
        <div className="flex ">
          <label className="capitalize w-1/3 text-center text-neutral-800">
            Category
          </label>
          <input
            value={data?.category}
            onChange={(e) => {
              setData((d) => (d = { ...d, category: e.target.value }));
            }}
            className="p-2 ms-4 border-violet-600 outline-violet-600 w-2/3"
            type="text"
          />
        </div>
        <div className="flex ">
          <label className="capitalize w-1/3 text-center text-neutral-800">
            Price
          </label>
          <input
            value={data?.price}
            onChange={(e) => {
              setData((d) => (d = { ...d, price: e.target.value }));
            }}
            className="p-2 ms-4 border-violet-600 outline-violet-600 w-2/3"
            type="number"
          />
        </div>
        <div className="flex ">
          <label className="capitalize w-1/3 text-center text-neutral-800">
            Image
          </label>
          <input
            multiple
            onChange={(e) => {
              console.log(e.target.files);
              setData(
                (d) =>
                  (d = {
                    ...d,
                    image: e.target.files,
                    // imageUrl: URL.createObjectURL(e.target.files[0]),
                  })
              );
            }}
            className="p-2 ms-4 border-violet-600 outline-violet-600 w-2/3"
            type="file"
          />
        </div>

        <button
          className="shadow-lg rounded-xl mx-auto w-1/3 bg-violet-700 text-white py-2 px-4"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

// function Test() {

//     const [file, setfile] = useState()
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formdata = new FormData()
//         formdata.append('image', file)
//         await fetch('http://localhost:3003/admin/newProduct', { method: 'POST', body: file })
//     }

//     return <div>
//         <form >
//             <input type="file" onChange={(e) => { console.log(e.target.files[0]); setfile(e.target.files[0]) }}></input>
//             <button onClick={(e) => handleSubmit(e)}>Upload</button>
//         </form>
//     </div>
// }
