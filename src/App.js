import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Header from "./Header";
import Shop from "./shop/Shop";
import { data } from "./data";
import Cards from "./card/Card";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";

const App = () => {
  const [cardprodects, setcardprodects] = useState([]);

  const addToCard = (r) => {
    let cheacked = cardprodects.every((e) => e.id !== r.id);

    if (cheacked) {
      r.item = 1;
      let newarr = [...cardprodects, r];
      setcardprodects(newarr);
    } else {
      r.item++;
    }
  };

  const increment = (t) => {
    let newarr = cardprodects.map((e) => {
      if (e.id === t.id) {
        e.item++;
        return e;
      } else {
        return e;
      }
    });
    setcardprodects(newarr);
  };

  const decrement = (t) => {
    let newarr = cardprodects.map((e) => {
      if (e.id === t.id && e.item > 1) {
        e.item--;
        return e;
      } else {
        return e;
      }
    });
    setcardprodects(newarr);
  };

  const delet = (r) => {
    let newarr = cardprodects.filter((e) => {
      return e.id !== r.id;
    });
    setcardprodects(newarr);
  };

  return (
    <div>
      <Header cardprodects={cardprodects} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop addToCard={addToCard} data={data} />}
        />
        <Route
          path="/card"
          element={
            <Cards
              cardprodects={cardprodects}
              increment={increment}
              decrement={decrement}
              delet={delet}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
