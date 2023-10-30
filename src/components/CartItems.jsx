import axios from "axios";
import React, { Component } from "react";
import { API_URL } from "../Utils/Constants";
import { numberWithCommas } from "../Utils/Utils";
import TotalBayar from "./shop/TotalBayar";
import Modal from "./Modal";
import swal from "sweetalert";

export default class CartItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carts: [],
      showModal: false,
      keranjangDetail: false,
      jumlah: 0,
      keterangan: "",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "carts")
      .then((res) => {
        console.log("Response: ", res);
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  submitTotalBayar = (totalBayar) => {
    const order = {
      total_bayar: totalBayar,
      menus: this.props.carts,
    };

    axios.post(API_URL + "orders", order).then((res) => {
      this.props.history.push("/success");
    });
  };

  handleShow = (menuKeranjang) => {
    this.setState({
      showModal: true,
      keranjangDetail: menuKeranjang,
      jumlah: menuKeranjang.jumlah,
      keterangan: menuKeranjang.keterangan,
      totalHarga: menuKeranjang.total_harga,
    });
  };

  handleClose = (menuKeranjang) => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
      totalHarga:
        this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
    });
  };

  kurang = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
        totalHarga:
          this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handlerSubmit = (event) => {
    // console.log("aman");
    event.preventDefault();

    this.handleClose();

    const data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHarga,
      product: this.state.keranjangDetail.product,
      keterangan: this.state.keterangan,
    };

    axios
      .put(API_URL + "carts/" + this.state.keranjangDetail.id, data)
      .then((res) => {
        swal({
          title: "Update Pesanan!",
          text: "Sukses Update Pesanan " + data.product.nama,
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  };

  render() {
    const { carts } = this.state;
    return (
      <>
        <div>
          <div className="flex mx-48 my-10 bg-[#f5f5f5] shadow-xl rounded-xl border-2">
            {/* Left */}
            <div className="w-3/4 my-12">
              <div className="mx-16">
                <p className="text-2xl font-poppins text-start">Cart</p>
              </div>
              <div className="my-12" carts={carts} {...this.props}>
                {carts.length !== 0 && (
                  <div>
                    {carts.map((menuKeranjang) => (
                      <div
                        className="Card flex my-4 mx-16 rounded-xl bg-white"
                        key={menuKeranjang.id}
                        onClick={() => this.handleShow(menuKeranjang)}
                      >
                        <div className="w-1/4 my-5 mx-5 bg-[#f5f5f5] flex justify-center items-center ">
                          <p className="rounded-xl">image</p>
                        </div>

                        <div className="w-3/4 grid items-center mr-5">
                          <div className="grid gap-3 my-3">
                            <div>
                              <p className="text-start font-bold text-xl">
                                {menuKeranjang.product.nama}
                              </p>
                            </div>
                            <div>
                              <p className="text-start">desc</p>
                            </div>
                            <div className="flex">
                              <div className="w-1/2">
                                <p className="text-start font-poppins">
                                  IDR
                                  {numberWithCommas(
                                    menuKeranjang.product.harga
                                  )}
                                </p>
                              </div>
                              {/* <div className="w-1/2">
                                <p className="text-end">
                                  {numberWithCommas(menuKeranjang.jumlah)}
                                </p>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* <!-- Modal --> */}
                    <Modal
                      handleClose={this.handleClose}
                      {...this.state}
                      tambah={this.tambah}
                      kurang={this.kurang}
                      changeHandler={this.changeHandler}
                      handlerSubmit={this.handlerSubmit}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right */}
            <div className="w-1/3 bg-white" carts={carts} {...this.props}>
              <div className="mx-16 my-12">
                <p className="text-2xl font-poppins">Order Summary</p>
              </div>
              <div>
                {carts.length !== 0 && (
                  <div className="my-12">
                    {carts.map((menuKeranjang) => (
                      <>
                        <div className="Card flex my-4 mx-16 rounded-xl bg-white">
                          <div className="w-1/3 grid items-center mr-5">
                            <div className="grid items-center gap-3 my-3">
                              <div className="grid items-center">
                                <p className="text-start">
                                  {menuKeranjang.product.nama}
                                </p>
                              </div>
                              <div className="flex">
                                <div className="">
                                  <p className="text-start">
                                    IDR
                                    {numberWithCommas(
                                      menuKeranjang.product.harga
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3 flex justify-center items-center">
                            <div className="flex justify-center items-center">
                              <p className="text-end">
                                {numberWithCommas(menuKeranjang.jumlah)}
                              </p>
                            </div>
                          </div>
                          <div className="w-1/3 flex items-center justify-center">
                            <div className="">
                              <p>
                                {numberWithCommas(menuKeranjang.total_harga)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                )}
              </div>
              <div>
                {carts.length !== 0 && (
                  <>
                    <div className="">
                      <p>
                        <TotalBayar carts={carts} {...this.props} />
                      </p>
                    </div>
                    {/* <button
                      className="bg-blue-500 mx-24 my-10 rounded-lg"
                      onClick={() => this.submitTotalBayar(TotalBayar)}
                    >
                      <div className="mx-24">
                        <div className="my-3">
                          <p className="text-white font-poppins">Checkout</p>
                        </div>
                      </div>
                    </button> */}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
