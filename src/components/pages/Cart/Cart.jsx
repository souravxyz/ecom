import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdjustCart, clearCart, removeFromCart } from "../../Redux/CartSlice";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(AdjustCart({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <>
      <div className="cart">
        <h2>Your Shopping Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              onClick={() => navigate(`/product/${item.id}`)}
              src={item.thumbnail}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-detail">
              <h3>{item.title}</h3>
              <p>${item.price * item.quantity}</p>
              <div className="cart-item-actions">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </button>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
        <button onClick={handleClearCart} className="clear-cart">
          Clear Cart
        </button>
        <Link to="/signup">
          <button className="buy-now">BUY NOW</button>
        </Link>
      </div>
    </>
  );
};
