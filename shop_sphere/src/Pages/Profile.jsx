import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const [effect, setEffect] = useState(false);
  const constrains = useRef(null);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-center ">
        <div
          className="bg-[#fff]  shadow-2xl   flex border-1 "
          style={{ height: "550px", width: "900px" }}
        >
          <form
            className={`${
              effect ? "hidden" : "block"
            } sign-in w-10/12 relative flex flex-col mt-14`}
          >
            <h1 className="text-2xl font-bold mb-3.5">Welcome!</h1>
            <label>
              <span className="uppercase text-sm my-3.5">Email</span>
              <input
                type="email"
                placeholder=""
                className="border-b-2 border-b-gray-500 block my-3.5 text-center pb-2 outline-none mx-auto"
              />
            </label>

            <label>
              <span className="uppercase text-sm my-3.5">Password</span>
            </label>
            <input
              type="password"
              placeholder=""
              className="border-b-2 border-b-gray-500 block my-3.5 text-center pb-2 outline-none mx-auto"
            />
            <p>
              <span className="text-sm mt-3.5">Forget Password?</span>
            </p>
            <div className=" mt-10">
              <button
                type="button"
                style={{ width: "200px" }}
                className="text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Sign-In
              </button>
            </div>
          </form>

          <div
            className={`${
              effect
                ? "-translate-x-3.5 ease-linear duration-300 w-5/12 "
                : "translate-x-3 ease-linear duration-300 w-3/5"
            } relative bg-rose-200 w-3/5  font-bold `}
          >
            <div>
              {effect ? (
                <h3 className="absolute top-16 left-10">
                  If you already has an account, just sign in.
                </h3>
              ) : (
                <h3 className="absolute top-14 left-12">
                  Don't have an account create yet? <br />
                  Then, Please Sign up!
                </h3>
              )}
            </div>
            {/* {`${effect} && "-translate-x-8"`} */}
            <div ref={constrains} className="flex justify-center items-center">
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => setEffect((e) => !e)}
                onAnimationEnd={() => setEffect(false)}
                className=" absolute  text-white top-2/4 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {effect ? "Sign-in" : "Sign-Up"}
              </motion.button>
            </div>

            <div
              className={`${
                effect ? "block" : "hidden"
              }  relative float-right `}
            >
              <form action="" className="absolute top-14 left-24 text-center">
                <h1 className="text-2xl">Create Account </h1>
                <br />
                <label>
                  <span className="uppercase text-sm my-3.5">Name</span>
                  <input
                    type="text"
                    placeholder=""
                    className="border-b-2 border-b-gray-500 block my-3.5 text-center pb-2 outline-none mx-auto"
                  />
                </label>
                <label>
                  <span className="uppercase text-sm my-3.5">Email</span>
                  <input
                    type="email"
                    placeholder=""
                    className="border-b-2 border-b-gray-500 block my-3.5 text-center pb-2 outline-none mx-auto"
                  />
                </label>

                <label>
                  <span className="uppercase text-sm my-3.5">Password</span>
                </label>
                <input
                  type="password"
                  placeholder=""
                  className="border-b-2 border-b-gray-500 block my-3.5 text-center pb-2 outline-none mx-auto"
                />
                <div className=" mt-10">
                  <button
                    type="button"
                    style={{ width: "200px" }}
                    className="text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                  >
                    Sign-Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
