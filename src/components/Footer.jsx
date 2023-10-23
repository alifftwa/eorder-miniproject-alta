import React from "react";
import logo1 from "../assets/Logo1.png";

function Footer() {
  return (
    <div className="w-full">
      <div className="mt-8 flex flex-row bg-[#121212] text-white">
        <div className="basis-1/2">
          <div className="ml-20 my-20">
            <div>
              <img src={logo1} alt="" />
            </div>
            <div className="w-2/5 mt-5">
              <p className="font-sans">
                Whether you’re seasoned foodle or just looking for some
                gastronomic inspiration, Eat.Me is your trusted companion
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="basis-1/5">
          <div className="my-14 grid rows-2">
            <div className="text-left">
              <p className="font-poppins font-bold">About</p>
            </div>

            <div className="mt-14 grid row-3 gap-4 text-left">
              <div>
                <button className="text-left">About Us</button>
              </div>
              <div>
                <button className="text-left">Features</button>
              </div>
              <div>
                <button className="text-left">News</button>
              </div>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="basis-1/5">
          <div className="my-14 grid rows-2">
            <div className="text-left">
              <p className="font-poppins font-bold">Company</p>
            </div>

            <div className="mt-14 grid row-3 gap-4 text-left">
              <div>
                <button className="text-left">FAQ</button>
              </div>
              <div>
                <button className="text-left">Blogs</button>
              </div>
              <div>
                <button className="text-left">Partner with us</button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="basis-1/5">
          <div className="my-14 grid rows-2">
            <div className="text-left">
              <p className="font-poppins font-bold">Contact</p>
            </div>

            <div className="mt-14 grid row-3 gap-4 text-left">
              <div>
                <button className="text-left">+62 812 3456 7890</button>
              </div>
              <div>
                <button className="text-left">Eat.me@gmail.com</button>
              </div>
              <div>
                <button className="text-left">Jakarta, Indonesia</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 w-full bg-[#242424] flex justify-center items-center">
        <p className="text-center text-white">
          © 2023 Alifftwa, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
