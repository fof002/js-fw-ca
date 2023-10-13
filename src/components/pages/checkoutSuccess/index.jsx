import { Link } from "react-router-dom";

export function CheckoutSuccess() {
  localStorage.removeItem("cart");
  const cartCounter = document.querySelector("#cartCounter");
  cartCounter.innerText = "";

  return (
    <div className="d-flex justify-content center flex-column align-items-center">
      <div>Your checkout was very successfull!</div>
      <Link to="/">Go home</Link>
    </div>
  );
}
