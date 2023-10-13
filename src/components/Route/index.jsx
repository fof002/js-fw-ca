import { Route, Routes } from "react-router-dom";
import { Cart } from "../pages/cart";
import { HomePage } from "../pages/homepage/Homepage";
import { IndividualProduct } from "../pages/individualProduct";
import { Layout } from "../Layout";
import { ContactForm } from "../pages/contact/contactForm";
import { CheckoutSuccess } from "../pages/checkoutSuccess";

export function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="/:id" element={<IndividualProduct />} />
        <Route path="Contact" element={<ContactForm />} />
        <Route path="CheckoutSuccess" element={<CheckoutSuccess />} />
      </Route>
    </Routes>
  );
}
