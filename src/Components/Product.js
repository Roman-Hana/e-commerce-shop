import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, info }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        info: info,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__cart">
        <div className="product__imgHolder">
          <img src={image} alt="" />
        </div>
        <div className="product__info">
          <h2>{title}</h2>
          <p>{info}</p>
          <p className="product__price">
            <small>$ </small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <div className="container">
          <div className="btn" onClick={addToBasket}>
            <p>Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
