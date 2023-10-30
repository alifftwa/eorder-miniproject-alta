import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout";
import logo from "../assets/Logo.png";
import search from "../assets/Search.png";
import cart from "../assets/Cart.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <div className="flex flex-row justify-center items-center h-[100px] mx-auto text-black font-poppins">
          <div className="flex justify-center">
            <img src={logo} alt="" />
          </div>

          <div className="flex gap-10 mx-auto">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/menu")}>Menu</button>
            <button onClick={() => navigate("/ourchef")}>Our Chef</button>
          </div>

          <div className="flex justify-center">
            <div className="flex justify-center w-24">
              <button>
                <img src={search} alt="" />
              </button>
            </div>
            <div className="flex justify-center w-24">
              <button onClick={() => navigate("/cart")}>
                <img src={cart} alt="" />
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Navbar;
