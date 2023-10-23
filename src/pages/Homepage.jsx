import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../layout";
import img1 from "../assets/Hero.png";
import img2 from "../assets/Carousel.png";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <div>
        <Navbar />

        {/* Section 1 */}
        <Layout>
          <div className="flex w-full h-auto">
            {/* Left */}
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

        {/* Section 2 */}
        <div className="h-[1210px] bg-[#F5F5F5]">
          <Layout>
            <div className="flex justify-center">
              <p className="py-20 text-3xl font-bold font-poppins text-orange-500">
                Our Special Menu
              </p>
            </div>

            <Card />

            <div className="mx-48 my-14 overflow-hidden flex justify-center ">
              <div className="w-full flex justify-center bg-orange-500 rounded-xl mx-4">
                {/* Left */}
                <div className="w-1/2">
                  <img src={img2} alt="" />
                </div>
                {/* Right */}
                <div className="w-1/2">
                  <div className="mx-16 mt-16">
                    <p className="font-poppins font-bold text-3xl text-white text-center">
                      Delicious Fried Chicken on a Plate with spicy sauce &
                      China Meat Eat Plate!
                    </p>
                    <p className="mt-4 font-poppins font-sans text-xl text-[#DFFA3B] text-center">
                      Order yours now
                    </p>

                    <div className="w-full my-3 flex justify-center items-center">
                      <button className="mt-3 border-solid border border-white rounded-3xl">
                        <p className="mx-4 my-1 text-white">See all menu</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
