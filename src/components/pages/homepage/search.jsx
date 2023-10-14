import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const baseUrl = "https://api.noroff.dev/api/v1/online-shop/";

export function SearchProducts() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(baseUrl);
        const json = await response.json();
        setProducts(json);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (document.querySelector("#searchInput").value.length === 0) {
      document.querySelector("#searchUrl").style.display = "none";
    } else {
      document.querySelector("#searchUrl").style.display = "block";
      return product.title.toLowerCase().includes(query.toLowerCase());
    }
  });

  function showList() {
    const listOfProducts = document.querySelector("#searchUrl");
    listOfProducts.style.display = "block";
  }

  return (
    <div className="mb-3 d-flex flex-column gap-2">
      <input
        className="position-relative"
        style={{ width: "min(20em, 90vw)" }}
        name="search-input"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        ref={inputRef}
        onFocus={showList}
        id="searchInput"
      ></input>
      <div
        className="position-relative"
        id="searchUrl"
        style={{ display: "none", zIndex: "9999" }}
      >
        <ul
          className="position-absolute bg-white pb-3 shadow-lg"
          style={{ top: 0, left: 0, width: "20em" }}
          id="searchInput"
        >
          {filteredProducts.map((product) => {
            return (
              <li>
                <Link
                  to={{
                    pathname: `/${product.id}`,
                  }}
                >
                  {" "}
                  {product.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
