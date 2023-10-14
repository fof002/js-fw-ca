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
    return product.title.toLowerCase().includes(query.toLowerCase());
  });

  /*function onSearch(e) {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    setProducts((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  }*/

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
      ></input>
      <div className="position-relative">
        <ul
          className="position-absolute bg-white pb-3 shadow-lg"
          style={{ zIndex: "9999", top: 0, left: 0, width: "20em" }}
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
