import React from "react";
import Layout from "../layout";
import os1 from "../assets/Our Special/Os1.png";
import ReactStars from "react-stars";

function Card() {
  return (
    <>
      <Layout>
        <div className="flex justify-center h-[500px] w-full gap-10 my-20">
          <div class="rounded-xl overflow-hidden shadow-xl w-80 my-3 bg-white border border-[#c4c4c4]">
            <div class="relative w-full h-24 flex justify-center"></div>
            <div class="absolute -mt-48 ml-12">
              <img
                src={os1}
                class="rounded-full border-solid border-white border-2 -mt-3 ml-3"
              />
            </div>
            <div class="mt-5 font-poppins text-center px-3 pb-6 pt-2 ">
              <p class="font-semibold text-lg ">Fried Meat with Greens</p>
              <p class="mt-2 font-light font-sans text-sm text-[#999191]">
                Fried Meat with Greens embodies the perfect union of protein,
                greens, and seasonings. It's a wholesome and delightful dish
                that offers a satisfying culinary experience.
              </p>
            </div>
            <div class="w-full pb-3 flex justify-center  text-center text-black">
              <div className="w-64 mx-4 flex justify-center gap-2">
                <div class="w-1/2 h-28 text-center border border-[#c4c4c4] rounded-xl">
                  <p className="mt-7">Price</p>
                  <p>IDR 95.000,00</p>
                </div>
                <div class="w-1/2 h-28 text-center border border-[#c4c4c4] rounded-xl">
                  <h2 className="mt-6">Rating</h2>
                  <div class="w-96 ml-3">
                    <ReactStars count={5} size={24} edit color2={"#ffd700"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-48 h-10 mt-4 rounded-xl bg-orange-500 font-sans text-white font-normal">
                Add to cart
              </button>
            </div>
          </div>

          {/* OS-2 */}
          <div class="rounded-xl overflow-hidden shadow-xl w-80 my-3 bg-white border border-[#c4c4c4]">
            <div class="relative w-full h-24 flex justify-center"></div>
            <div class="absolute -mt-48 ml-12">
              <img
                src={os1}
                class="rounded-full border-solid border-white border-2 -mt-3 ml-3"
              />
            </div>
            <div class="mt-5 font-poppins text-center px-3 pb-6 pt-2 ">
              <p class="font-semibold text-lg ">Fried Meat with Greens</p>
              <p class="mt-2 font-light font-sans text-sm text-[#999191]">
                Fried Meat with Greens embodies the perfect union of protein,
                greens, and seasonings. It's a wholesome and delightful dish
                that offers a satisfying culinary experience.
              </p>
            </div>
            <div class="w-full pb-3 flex justify-center  text-center text-black">
              <div className="w-64 mx-4 flex justify-center gap-2">
                <div class="w-1/2 h-28 text-center border border-[#c4c4c4] rounded-xl">
                  <p className="mt-7">Price</p>
                  <p>IDR 95.000,00</p>
                </div>
                <div class="w-1/2 h-28 text-center border border-[#c4c4c4] rounded-xl">
                  <h2 className="mt-6">Rating</h2>
                  <div class="w-96 ml-3">
                    <ReactStars count={5} size={24} edit color2={"#ffd700"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-48 h-10 mt-4 rounded-xl bg-orange-500 font-sans text-white font-normal">
                Add to cart
              </button>
            </div>
          </div>

          {/* OS-3 */}
          <div class="rounded-xl overflow-hidden shadow-xl w-80 my-3 bg-white border border-[#c4c4c4]">
            <div class="relative w-full h-24 flex justify-center"></div>
            <div class="absolute -mt-48 ml-12">
              <img
                src={os1}
                class="rounded-full border-solid border-white border-2 -mt-3 ml-3"
              />
            </div>
            <div class="mt-5 font-poppins text-center px-3 pb-6 pt-2 ">
              <p class="font-semibold text-lg ">Fried Meat with Greens</p>
              <p class="mt-2 font-light font-sans text-sm text-[#999191]">
                Fried Meat with Greens embodies the perfect union of protein,
                greens, and seasonings. It's a wholesome and delightful dish
                that offers a satisfying culinary experience.
              </p>
            </div>
            <div class="w-full pb-3 flex justify-center  text-center text-black">
              <div className="w-64 mx-4 flex justify-center gap-2">
                <div class="w-1/2 h-28 text-center border border-[#c4c4c4] rounded-xl">
                  <p className="mt-7">Price</p>
                  <p>IDR 95.000,00</p>
                </div>
                <div class="w-1/2 h-28 text-center border border-[#c4c4c4] rounded-xl">
                  <h2 className="mt-6">Rating</h2>
                  <div class="w-96 ml-3">
                    <ReactStars count={5} size={24} edit color2={"#ffd700"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-48 h-10 mt-4 rounded-xl bg-orange-500 font-sans text-white font-normal">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Card;
