import React from "react";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16 my-16 flex justify-center">
      <div className="gap-20 flex items-center rounded-xl font-poppins border border-2 border-[#F5F5F5] shadow-lg">
        <div className="flex justify-center gap-20 mx-96">
          <button onClick={() => navigate("/menu/all-promos")}>
            All Promos
          </button>
          <button onClick={() => navigate("/menu/food")}>Food</button>
          <button onClick={() => navigate("/menu/drink")}>Drink</button>
          <button onClick={() => navigate("/menu/desert")}>Desert</button>
          <button onClick={() => navigate("/menu/snack")}>Snack</button>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
