import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import "./product.css";

const Product = ({ desc, img, price }) => {
  return (
    <div className="pro">
      <img src={img} alt="" />
      <div className="des">
        <h5>{desc}</h5>
        <div className="star">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h4>{price}FCFA</h4>
      </div>
      <span id="cart">
        <span
          className="cart"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AiOutlineShoppingCart />
        </span>
      </span>
    </div>
  );
};

export default Product;
