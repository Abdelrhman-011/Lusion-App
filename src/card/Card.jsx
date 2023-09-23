import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";

const Cards = ({ cardprodects, increment, decrement, delet }) => {
  console.log(cardprodects);
  const navgtly = useNavigate();
  const gotoshop = () => {
    navgtly("/shop");
  };
  return (
    <div>
      {cardprodects.length === 0 ? (
        <div className="d-flex flex-column  justify-content-center align-items-center w-100 vh-100">
          <h1 className="text-danger text-center">
            Your Shopping Cart is Empty
          </h1>
          <p className="fs-1 text text-center">
            please go to prodects section to{" "}
            <span
              className="text-success text-decoration-underline"
              onClick={gotoshop}
              style={{ cursor: "pointer" }}
            >
              Start Shopping
            </span>
          </p>
        </div>
      ) : (
        <div>
          <div className="container bg-success w-100 d-flex justify-content-center flex-wrap text-white mb-5">
            <h4 className="me-3 pb-5 pt-3">
              Total Price is{" "}
              <span className="text-warning">
                {cardprodects
                  .map((e) => e.item * e.prise)
                  .reduce((r, y) => r + y, 0)}
                $
              </span>
            </h4>
            <div className="pt-3">
              <Button
                variant="success border border-white mb-4"
                as={Link}
                to="/shop"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-around">
              {cardprodects.map((prodect) => (
                <Card
                  className="col-lg-3 col-md-5 col-5 mb-5 me-3"
                  key={prodect.id}
                >
                  <Card.Img variant="top" src={prodect.ph} />
                  <Card.Body>
                    <Card.Title>Item: {prodect.text}</Card.Title>
                    <Card.Text className="fw-bold">
                      Price: {prodect.prise}$
                    </Card.Text>
                    <Card.Text className="text-success">
                      {prodect.item} item
                    </Card.Text>
                    <div className="d-flex">
                      <Button
                        className="me-2 bg-success  border-0"
                        onClick={() => increment(prodect)}
                      >
                        +
                      </Button>
                      <Button
                        className="me-2 bg-warning border-0"
                        onClick={() => decrement(prodect)}
                      >
                        -
                      </Button>
                      <Button
                        className="me-2 bg-danger border-0"
                        onClick={() => delet(prodect)}
                      >
                        <MdDelete />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
