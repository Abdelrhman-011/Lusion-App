import React from "react";
import shop1 from "../Images/Shop1.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaShopify } from "react-icons/fa";
import "./shop.css";

const Shop = ({ data, addToCard }) => {
  return (
    <div>
      <div className="position-relative mb-5">
        <Image src={shop1} fluid />
        <h1 className="text-white position-absolute bottom-0 start-50 translate-middle-x">
          Shop Now
        </h1>
      </div>
      <div className="d-flex justify-content-center w-100 mb-5">
        <Button variant="outline-success" as={Link} to="/">
          Back Home
        </Button>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center section1">
          {data.map((prodect) => (
            <Card className="col-lg-3 col-md-3 col-5" key={prodect.id}>
              <Card.Img variant="top" src={prodect.ph} />
              <Card.Body>
                <Card.Title>{prodect.text}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text className="fs-4 text fw-bold">
                    {prodect.prise}$
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="rounded-circle bg-success border-0"
                    onClick={() => addToCard(prodect)}
                  >
                    <FaShopify />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
