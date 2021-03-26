import React from "react";
import "./Checkout.css";
import Subtotal from "../Components/Subtotal";
import { useStateValue } from "../Components/StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <h1>Hello, {user?.email}</h1>
        <h2 className="checkout__title">Your shopping basket</h2>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
      <div
        style={{
          height: "5rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#222",
          color: "#fff",
          position: "fixed",
          bottom: 0,
          left: 0,
        }}
      >
        <h5>@ 2021 All rights reserved</h5>
      </div>
    </div>
  );
}

export default Checkout;
