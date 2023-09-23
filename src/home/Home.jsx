import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import logoOne from "../Images/logoOne.png";
import logoTwo from "../Images/logoTwo.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s1 from "../Images/s1.jpg";
import s2 from "../Images/s2.jpg";
import s3 from "../Images/s3.jpg";
import s4 from "../Images/s4.jpg";
import "./home.css";
import t1 from "../Images/t1.jpg";
import t2 from "../Images/t2.jpg";
import t3 from "../Images/t3.jpg";
import t4 from "../Images/t4.jpg";
import { Link } from "react-router-dom";
import fifth1 from "../Images/fifth1.jpg";
import fifth2 from "../Images/fifth2.jpg";
import fifth3 from "../Images/fifth3.jpg";
import fifth4 from "../Images/fifth4.jpg";
import fifth5 from "../Images/fifth5.jpg";
import fifth6 from "../Images/fifth6.jpg";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="mb-5" style={{ background: "blanchedalmond" }}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Image src={logoOne} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={logoTwo} fluid />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container mb-5">
        <div className=" row d-flex justify-content-center section1">
          <Card className="border-0 col-lg-2 col-md-5 col-5 container">
            <Card.Img variant="top" src={s1} />
            <Card.Body className="text-center">
              <Card.Title className="text-success ">
                <h4>Clothes</h4>
              </Card.Title>
              <Card.Text>item 5</Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 col-lg-2 col-md-5 col-5 container">
            <Card.Img variant="top" src={s2} />
            <Card.Body className="text-center">
              <Card.Title className="text-success">
                <h4>Bag Brand</h4>
              </Card.Title>
              <Card.Text>item 20</Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 container col-lg-2 col-md-5 col-5">
            <Card.Img variant="top" src={s3} />
            <Card.Body className="text-center">
              <Card.Title className="text-success ">
                <h4>Accessories</h4>
              </Card.Title>
              <Card.Text>item 6</Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-0 col-lg-2 col-md-5 col-5 container">
            <Card.Img variant="top" src={s4} />
            <Card.Body className="text-center">
              <Card.Title className="text-success ">
                <h4>Shoes</h4>{" "}
              </Card.Title>
              <Card.Text>item 8</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="bg-light">
        <h1 className="text-center mb-5">Featured prodects</h1>
        <div className="container mb-5">
          <div className=" row d-flex justify-content-center section1 pb-5">
            <Card className="text-center col-lg-2 col-md-5 col-5 container">
              <Card.Img variant="top" src={t1} className="section2" />
              <Card.Body>
                <Card.Text className="text-secondary">
                  Variety of women clothes
                </Card.Text>
                <Card.Text className="text-success fw-bold">150 $</Card.Text>
                <Button variant="outline-success" as={Link} to="/shop">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
            <Card className="text-center container col-lg-2 col-md-5 col-5">
              <Card.Img variant="top" src={t2} className="section2" />
              <Card.Body>
                <Card.Text className="text-secondary">
                  Variety of women clothes
                </Card.Text>
                <Card.Text className="text-success fw-bold">110 $</Card.Text>
                <Button variant="outline-success" as={Link} to="/shop">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
            <Card className="text-center col-lg-2 col-md-5 col-5 container">
              <Card.Img variant="top" src={t3} className="section2" />
              <Card.Body>
                <Card.Text className="text-secondary">
                  Complete your look
                </Card.Text>
                <Card.Text className="text-success fw-bold">200 $</Card.Text>
                <Button variant="outline-success" as={Link} to="/shop">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
            <Card className="text-center col-lg-2 col-md-5 col-5 container">
              <Card.Img variant="top" src={t4} className="section2" />
              <Card.Body>
                <Card.Text className="text-secondary">
                  All that makes your wardrobe
                </Card.Text>
                <Card.Text className="text-success fw-bold">250 $</Card.Text>
                <Button variant="outline-success" as={Link} to="/shop">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row" style={{ height: "60vh" }}>
          <div className="col-lg-6 col-md-12 col-12 section3 text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-secondary">MERRY</h1>
            <h1 className="text-success">
              CHRISTMAS <span className="text-black">40%</span> OFF
            </h1>
            <Button
              variant="outline-success"
              as={Link}
              to="/shop"
              className="w-25"
            >
              Shop Now
            </Button>
          </div>
          <div className="col-lg-6 col-md-12 col-12  d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-success">Your Next</h1>
            <h1>purchase 10% off</h1>
            <Button
              variant="outline-success"
              as={Link}
              to="/shop"
              className="w-25"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 row mb-3">
            <Image className="col-6" src={fifth1} fluid />
            <Image className="col-6" src={fifth2} fluid />
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-3 ">
            <div className="section4">
              <p className="p_section4">
                Fashion is not only a kind of appearance, populer may not be
                suitable for you, but according to their own to dress up
                yourself, that can all be fashionable
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 row mb-3">
            <Image className="col-6" src={fifth3} fluid />
            <Image className="col-6" src={fifth4} fluid />
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="section4">
              <p className="p_section4">
                some people sey that loneliness is shameful, but fachion is a
                means of resisanes alone, this is fashion realm
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 row mb-3">
            <Image className="col-6" src={fifth5} fluid />
            <Image className="col-6" src={fifth6} fluid />
          </div>
          <div className="col-lg-6 col-md-6 col-12 mb-3">
            <div className="section4">
              <p className="p_section4">
                The fashion industry is always desperate to imovate, this kind
                of dress is now in fashion, the organizers guided them in
                orderly fashion, is a kind of aesthetic view
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
