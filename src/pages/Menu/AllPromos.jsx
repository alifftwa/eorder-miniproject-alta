import React from "react";
import Card from "../../components/CardMenu";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NavMenu from "../../components/NavMenu";

function AllPromos() {
  return (
    <>
      <Navbar />
      <NavMenu />
      <div className="w-full">
        <div className="mx-64 h-[2200px] bg-[#f5f5f5] shadow-lg border-2 border-[#c4c4c4] rounded-3xl">
          <div>
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllPromos;
