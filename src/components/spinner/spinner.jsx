import Spinner from "react-bootstrap/Spinner";

export function SpinnerLoading() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
