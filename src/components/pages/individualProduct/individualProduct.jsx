import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import { SetPrice } from "../../product/price";
import { addToCart } from "../../cart/addToCart.mjs";

export function IndividualProduct({ product }) {
  return (
    <Container style={{ maxWidth: "78em" }}>
      <Row className="d-flex justify-content-center row-gap-4">
        <Col
          key={product.id}
          lg={4}
          md={6}
          sm={12}
          className="d-flex justify-content-center"
        >
          <Card style={{ maxWidth: "40rem", minHeight: "35rem" }}>
            {product.imageUrl ? (
              <Card.Img
                height={350}
                width={60}
                variant="top"
                src={product.imageUrl}
              />
            ) : (
              <Card.Img fluid variant="top" src="holder.js/171x180" />
            )}
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <SetPrice
                price={product.price}
                discountedPrice={product.discountedPrice}
              />
              <Card.Text>{product.description}</Card.Text>
              <ButtonGroup size="sm" className="mb-2">
                <Button
                  data-id={product.id}
                  variant="primary"
                  onClick={addToCart}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
