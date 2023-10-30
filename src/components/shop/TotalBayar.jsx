// import React, { Component } from "react";
// import { numberWithCommas } from "../../Utils/Utils";
// import axios from "axios";
// import { API_URL } from "../../Utils/constants";

// export default class TotalBayar extends Component {
//   submitTotalBayar() {
//     const order = {
//       total_bayar: totalBayar,
//       menus: this.props.carts,
//     };

//     axios.post(API_URL + "pesanans", pesanan).then((res) => {
//         this.props.history.push('/sukses')
//     });
//   }

//   render() {
//     const totalBayar = this.props.carts.reduce(function (result, item) {
//       return result + item.total_harga;
//     }, 0);

//     return (
//       <div className="">
//         <div>
//           <p className="font-semibold text-center text-2xl">
//             Total Harga: IDR{numberWithCommas(totalBayar)}
//           </p>
//         </div>
//         <div className="my-10 ">
//           <div className="bg-blue-500 rounded-2xl mx-10 ">
//             <button
//               className="my-5 text-white font-poppins text-lg"
//               onClick={() => this.submitTotalBayar(totalBayar)}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { numberWithCommas } from "../../Utils/Utils";
import axios from "axios";
import { API_URL } from "../../Utils/Constants";
import Checkout from "../Checkout";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const order = {
      total_bayar: totalBayar,
      menus: this.props.carts,
    };

    axios
      .post(API_URL + "orders", order)
      .then((res) => {
        this.props.history.push("/success");
      })
      .catch((error) => {
        // Handle errors if needed
        console.error("Error submitting the order:", error);
      });
  };

  render() {
    const totalBayar = this.props.carts.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <div>
        <div className="flex flex-row">
          <div className="w-2/4">
            <p>Total Bayar</p>
          </div>

          <div className="w-24">
            <p className="text-start">IDR</p>
          </div>

          <div className="w-1/4">
            <p className="text-start">{numberWithCommas(totalBayar)}</p>
          </div>
        </div>
        <div className="">
          {/* <button
            className="bg-blue-500 mx-24 my-10 rounded-lg"
            // onClick={() => this.submitTotalBayar(totalBayar)}
            onClick={() => navigate("/success")}
          >
            <div className="mx-24">
              <div className="my-3">
                <p className="text-white font-poppins">Checkout</p>
              </div>
            </div>
          </button> */}
          <Checkout/>
        </div>
      </div>
    );
  }
}

