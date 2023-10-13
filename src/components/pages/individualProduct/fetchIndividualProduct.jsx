import { useEffect, useState } from "react";
import { SpinnerLoading } from "../../spinner/spinner";
import { ErrorMessage } from "../../panels/alert/Alert";
import { useParams } from "react-router-dom";
import { IndividualProduct } from "./individualProduct";

const baseUrl = "https://api.noroff.dev/api/v1/online-shop/";
let errorRecieved = "";

export function FetchIndividualProduct() {
  const [product, setProduct] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  let params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(baseUrl + params.id);
        const json = await response.json();
        setProduct(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        errorRecieved = error;
      }
    };
    getProduct();
  }, []);
  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (isError) {
    return <ErrorMessage errorMessage={errorRecieved} />;
  }
  return <IndividualProduct product={product} />;
}
