import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../layout";
import img1 from "../assets/Hero.png";
import Card from "../components/Card";

function Homepage() {
  return (
    <>
      <div>
        <Navbar />
        <Layout>
          <div className="flex w-full h-auto">
            {/* Kiri */}
            <div className="w-1/2 pt-48">
              <div>
                <p className="font-poppins font-medium text-2xl">
                  Welcome to EAT.ME
                </p>
              </div>

              <div className="py-5">
                <div className="pr-28">
                  <p className="font-poppins font-bold text-4xl text-orange-500">
                    There are many menu options that you can choose from what
                    are you waiting for? let’s order now!
                  </p>
                </div>
              </div>

              <div className="">
                <p className="font-medium text-lg font-poppins">
                  Start your culinary adventure with EatMate Today
                </p>
              </div>

              <div className="flex pt-9 gap-5">
                <div className="w-32 py-2 rounded-lg border-2 border-orange-500 bg-orange-500">
                  <button className="w-full text-white font-medium">
                    Add to cart
                  </button>
                </div>
                <div className="w-32 py-2 rounded-lg border-2 border-orange-500">
                  <button className="w-full text-black font-medium">
                    Book a Table
                  </button>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-1/2 grid justify-items-start">
              <div className="pl-24">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </Layout>

        <div className="bg-[#F5F5F5]">
          <Layout>
            <div className="flex justify-center">
              <p className="py-20 text-3xl font-bold font-poppins text-orange-500">Our Special Menu</p>
            </div>
            <Card />
          </Layout>
        </div>
      </div>
    </>
  );
}

export default Homepage;
