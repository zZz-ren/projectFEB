export default function Cart() {
  const products = [
    {
      imageUrl: "",
      name: "Product name 1",
      category: "Product Category 1",
      description: "PRoduction Description lorem jeflghbdjs ispum ",
    },
    {
      imageUrl: "",
      name: "Product name 2",
      category: "Product Category 2",
      description: "PRoduction Description lorem jeflghbdjs ispum ",
    },
    {
      imageUrl: "",
      name: "Product name 3",
      category: "Product Category 3",
      description: "PRoduction Description lorem jeflghbdjs ispum ",
    },
  ];
  return (
    <div className="m-2 p-2 flex space-y-4">
      <div className="w-3/5 me-2 my-4 p-8 border-2 rounded-2xl">
        <header className=" w-full flex justify-between">
          <h2 className="text-xs text-gray-500 font-medium">
            <span className="text-2xl me-2 text-black font-normal">Cart</span>
            {products.length}
            products
          </h2>
          <button className="text-red-500 font-medium">
            &times; clear list
          </button>
        </header>
        {products && products.map((product) => <Product product={product} />)}
      </div>
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="flex border rounded-2xl my-2 justify-between">
      <div className="flex p-4 rounded-lg items-center space-x-4">
        <img
          src={`https://picsum.photos/260/180`}
          className="max-w-28 rounded-3xl"
          alt="img"
        />
        <h2>
          <span className="font-medium text-base">{product.name}</span>
        </h2>
        <div className="">
          <button>&minus;</button>
          <input className="w-1/5" type="number" />
          <button>&#43;</button>
        </div>
      </div>
    </div>
  );
}
