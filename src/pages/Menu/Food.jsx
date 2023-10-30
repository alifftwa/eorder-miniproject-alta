import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import Menus from "../../components/shop/Menus";
import ListCategories from "../../components/shop/ListCategories";
import swal from "sweetalert";
import { API_URL } from "../../Utils/Constants";

export default class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      selectCategory: "Food",
      carts: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.selectCategory)
      .then((res) => {
        console.log("Response: ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeCategory = (value) => {
    this.setState({
      selectCategory: value,
      menus: [],
    });
    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        console.log("Response: ", res);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  toCart = (value) => {
    console.log("Menu: ", value);
    axios
      .get(API_URL + "carts?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const cart = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + "carts", cart)
            .then((res) => {
              swal({
                title: "Berhasil ditambahkan!",
                text: "Berhasil ditambahkan!" + cart.product.nama,
                icon: "success",
                button: false,
                timer: 1200,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const cart = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "carts/" + res.data[0].id, cart)
            .then((res) => {
              swal({
                title: "Berhasil ditambahkan!",
                text: "Berhasil ditambahkan!" + cart.product.nama,
                icon: "success",
                button: false,
                timer: 1200,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, selectCategory } = this.state;
    return (
      <>
        <Navbar />
        <ListCategories
          changeCategory={this.changeCategory}
          selectCategory={selectCategory}
        />
        <div className="w-full">
          <div className="mx-64 h-[1900px] shadow-lg border-2 border-[#c4c4c4] rounded-3xl bg-[#f5f5f5]">
            <div className="grid justify-items-center my-16">
              <div className="grid grid-cols-3 gap-16">
                {menus &&
                  menus.map((menu) => (
                    <Menus key={menu.id} menu={menu} toCart={this.toCart} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
