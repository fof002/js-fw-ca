import { Card } from "react-bootstrap";

export function SetPrice(props) {
  if (props.price === props.discountedPrice) {
    return <Card.Subtitle>{props.price}</Card.Subtitle>;
  } else {
    return (
      <Card.Subtitle>
        <div> {props.discountedPrice}</div>
        <div className="text-danger">
          Discount: {Math.trunc(props.price - props.discountedPrice)}
        </div>
      </Card.Subtitle>
    );
  }
}
