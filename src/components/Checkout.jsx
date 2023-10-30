import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="bg-blue-500 mx-24 my-10 rounded-lg"
        // onClick={() => this.submitTotalBayar(totalBayar)}
        onClick={() => navigate("/success")}
      >
        <div className="mx-24">
          <div className="my-3">
            <p className="text-white font-poppins">Checkout</p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Checkout;
