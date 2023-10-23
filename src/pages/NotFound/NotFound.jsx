import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main class="h-screen w-full flex flex-col justify-center items-center bg-black">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>

        <Link to="/">
          <button class="mt-5">
            <a class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className="relative block px-8 py-3 bg-black border border-current">
                <p className="text-white">Go Home</p>
              </span>
            </a>
          </button>
        </Link>
      </main>
    </>
  );
}

export default NotFound;
