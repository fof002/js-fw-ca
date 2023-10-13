import { Products } from "../../product/product";
import { Link } from "react-router-dom";

export function FetchProductsFromLocalStorage() {
  let priceArray = [];
  if (localStorage.getItem("cart")) {
    const products = JSON.parse(localStorage.getItem("cart"));
    products.map((product) => {
      return product.price === product.discountedPrice
        ? priceArray.push(parseFloat(product.price))
        : priceArray.push(parseFloat(product.discountedPrice));
    });
    return products ? (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Products products={products} showAddToCart={false} showView={false} />
        {}
        <div className="text-danger">
          Total price:
          {priceArray.reduce((a, price) => (a = a + Math.trunc(price)), 0)}
        </div>
        <Link to="/CheckoutSuccess">
          <button
            style={{ width: "10em" }}
            type="button"
            className="btn btn-primary mt-4"
          >
            Checkout
          </button>
        </Link>
      </div>
    ) : (
      <div>Your cart is empty - Go shopping first</div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        Your cart is empty - Go shopping first
      </div>
    );
  }
}
