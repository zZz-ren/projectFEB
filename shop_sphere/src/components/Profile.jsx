export default function Profile() {
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        {/* login container  */}
        <div className="bg-white w-full h-full flex ">
          {/* img section  */}
          <img
            className="h-full w-1/2  sm:block hidden"
            src="/images/frontimage.jpg"
            alt=""
          />
          {/* form section  */}
          <div className="bg-gray-100 shadow-lg  my-12 w-1/3 p-10 h-3/4">
            <h2 className="font-bold text-2xl text-[#002D74] text-center">
              Login
            </h2>
            <p className="text-sm mt-4 ">
              Doesn't have an account yet?
              <a href="/" className="text-[#002D74]">
                Sign-Up
              </a>
            </p>

            <form className="flex flex-col gap-4 ">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="p-2 mt-8 rounded border  "
              />
              <input
                type="password"
                className="p-2 rounded border"
                placeholder="password"
              />
              <button className="bg-[#002D74] text-white p-2">Login</button>
            </form>

            <div className="  grid grid-cols-3 items-center text-gray-400 mt-8">
              <hr className="outline-gray-500" />
              <p className="text-center">OR</p>
              <hr className="outline-gray-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
