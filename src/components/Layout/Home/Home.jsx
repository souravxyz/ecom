import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { addToCart, setSearchQuery, setCategory } from "../../Redux/CartSlice";
import { productGetQuaries } from "../../../service/useQueries";
import "./HomeStyle.css";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchQuery, selectedCategory } = useSelector((state) => state.cart);
  const { data = [], error, isLoading } = productGetQuaries();
  console.log(data);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
    setCurrentPage(0);
  };

  const handleCategory = (category) => {
    dispatch(setCategory(category));
    setCurrentPage(0); 
  };

  const filteredProducts = data
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    );

  const offset = currentPage * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    offset,
    offset + itemsPerPage
  );

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchQuery}
        />
      </div>
      <div className="category-buttons">
        <button onClick={() => handleCategory(null)} className="btn">
          ALL
        </button>
        <button onClick={() => handleCategory("beauty")} className="btn">
          Beauty
        </button>
        <button onClick={() => handleCategory("fragrances")} className="btn">
          Fragrances
        </button>
        <button onClick={() => handleCategory("furniture")} className="btn">
          Furniture
        </button>
        <button onClick={() => handleCategory("groceries")} className="btn">
          Groceries
        </button>
      </div>
      <div className="product-list">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              onClick={() => navigate(`/product/${product.id}`)}
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <div className="product-buttons">
              <button
                onClick={() => navigate("/signup")}
                className="btn buy-btn"
              >
                Buy
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className="btn cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Home;
