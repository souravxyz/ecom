// Product.jsx
import React from "react";
import { productGetByIdQuaries } from "../../../service/useQueries";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";

const Product = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    data: product,
    isPending,
    isError,
    error,
  } = productGetByIdQuaries(id);

  if (isPending) {
    return <div className="loading">Loading...</div>;
  }
  if (isError) {
    return <div className="error">Error: {error.message}</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-img"
        />
      </div>
      <div className="product-content">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <div className="product-actions">
          <button onClick={() => navigate("/signup")} className="btn buy-btn">
            Buy Now
          </button>
          <button
            onClick={() => handleAddToCart(product)}
            className="btn cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
