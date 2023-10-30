import React, { Component } from "react";
import Imgsucces from "../assets/confirm.svg";
import axios from "axios";
import { API_URL } from "../Utils/Constants";
import GoHome from "../components/GoHome";

export default class Succes extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "carts")
      .then((res) => {
        const carts = res.data;
        carts.map(function (item) {
          return axios
            .delete(API_URL + "carts/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  render() {
    return (
      <div className="md:max-h-screen bg-blue-500">
        <div className="h-[923px] grid justify-center items-center">
          <div className="mt-32">
            <img src={Imgsucces} alt="" width={500} />
          </div>
          <div className="mb-48">
            <p className="font-poppins text-3xl text-white">
              Pesanan anda diterima
            </p>
            <div className="bg-white mx-32 rounded-lg my-5">
              {/* <button className="my-2 font-semibold text-light">
                Back to Home
              </button> */}
              <GoHome/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
