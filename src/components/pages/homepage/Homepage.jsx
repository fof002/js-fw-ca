import { FetchProducts } from "../../product/fetchProducts";
import { SearchProducts } from "./search";

export function HomePage() {
  return (
    <main className="d-flex justify-content-center flex-column align-items-center">
      <SearchProducts />
      <FetchProducts />
    </main>
  );
}
