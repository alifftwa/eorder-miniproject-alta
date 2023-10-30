// import React, { useContext } from "react";
// import { ShopContext } from "../../context/shopContext";
// import Navbar from "../../components/Navbar";

// export const CartItem = (props) => {
//   const { id, menuName, price, menuImage } = props.data;
//   const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
//     useContext(ShopContext);

//   return (
//     <div className="cartItem">
//       <img src={menuImage} />
//       <div className="description">
//         <p>
//           <b>{menuName}</b>
//         </p>
//         <p> Price: IDR{price}</p>
//         <div className="countHandler">
//           <button onClick={() => removeFromCart(id)}> - </button>
//           <input
//             value={cartItems[id]}
//             onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//           />
//           <button onClick={() => addToCart(id)}> + </button>
//         </div>
//       </div>
//     </div>
//   );
// };
