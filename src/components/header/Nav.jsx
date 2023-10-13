import { Link } from "react-router-dom";
import { CartCount } from "../cart/cartCount";

export function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand text-white">
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/cart" className="text-white nav-link">
              Cart
            </Link>
            <CartCount />
            <Link to="/contact" className="text-white nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
