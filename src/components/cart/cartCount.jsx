import { useEffect, useState } from "react";

export function CartCount() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const setCartCount = () => {
      if (JSON.parse(localStorage.getItem("cart"))) {
        setCart(JSON.parse(localStorage.getItem("cart")).length);
      }
    };
    setCartCount();
  }, []);
  return (
    <div className="position-relative">
      <div
        id="cartCounter"
        className="text-white position-absolute "
        style={{
          bottom: "20px",
          borderRadius: "50%",
        }}
      >
        {cart}
      </div>
    </div>
  );
}
