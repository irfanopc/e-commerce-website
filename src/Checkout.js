import React, { useState } from "react";
import "./Checkout.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import ProductCart from "./ProductCart";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div>
      {<Header />}
      <h1 className="checkout">helooo checkout</h1>
      <div className="checkout_left">
        {basket.length === 0 ? (
          <div>
            <h2 className="checkout_title">your shopping basket is empty</h2>
            <p>you have no items in your basket .buy one</p>
          </div>
        ) : (
          <div>
            <h2 className="shoppingbaskettitle"> items</h2>
            {basket.map((item) => (
              <ProductCart
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
