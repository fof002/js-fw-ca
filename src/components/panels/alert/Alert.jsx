import { Alert } from "react-bootstrap";

export function ErrorMessage(errorMessage) {
  <Alert variant="danger">{errorMessage}</Alert>;
}
