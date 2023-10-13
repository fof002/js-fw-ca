import { useEffect, useState } from "react";
import { Products } from "./product";
import { ErrorMessage } from "../panels/alert/Alert";
import { SpinnerLoading } from "../spinner/spinner";

const baseUrl = "https://api.noroff.dev/api/v1/online-shop";
let errorRecieved = "";

export function FetchProducts() {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(baseUrl);
        const json = await response.json();
        setProducts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        errorRecieved = error;
      }
    };
    getProducts();
  }, []);
  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (isError) {
    return <ErrorMessage errorMessage={errorRecieved} />;
  }

  return <Products products={products} showAddToCart={true} showView={true} />;
}
