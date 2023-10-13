import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { SetPrice } from "./price";
import { addToCart } from "../cart/addToCart.mjs";

export function Products({ products, showAddToCart, showView }) {
  return (
    <Container style={{ maxWidth: "58em" }}>
      <Row className="d-flex justify-content-center row-gap-4">
        {products.map((product) => (
          <Col
            key={product.id}
            lg={4}
            md={6}
            sm={12}
            className="d-flex justify-content-center"
          >
            <Card style={{ width: "18rem", minHeight: "30rem" }}>
              {product.imageUrl ? (
                <Card.Img
                  height={250}
                  width={50}
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
                  {showAddToCart ? (
                    <Link
                      to={{
                        pathname: `/${product.id}`,
                      }}
                    >
                      <Button variant="primary">View</Button>
                    </Link>
                  ) : (
                    ""
                  )}
                  {showAddToCart ? (
                    <Button
                      onClick={addToCart}
                      data-id={product.id}
                      data-price={product.price}
                      data-title={product.title}
                      data-discountedprice={product.discountedPrice}
                      data-imageurl={product.imageUrl}
                      variant="primary"
                    >
                      Add to cart
                    </Button>
                  ) : (
                    ""
                  )}
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
