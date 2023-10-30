import axios from "axios";
import React, { Component } from "react";
import { API_URL } from "../../Utils/Constants";

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        console.log("Response: ", res);
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log("Categories : ", this.state.categories);
    const { categories } = this.state;
    const { changeCategory, selectCategory } = this.props;
    return (
      <div>
        <div className="w-full h-16 my-16 flex justify-center">
          <div className="gap-20 flex items-center rounded-xl font-poppins border border-2 border-[#F5F5F5] shadow-lg">
            <div className="flex justify-center gap-20 mx-96">
              {categories &&
                categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => changeCategory(category.nama)}
                  >
                    {category.nama}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
