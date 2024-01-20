import React from "react";
import "./index.css";
const PopularCategorieComponant = () => {
  const categroy = [
    {
      Image: "one.jpeg",
      name: "Breakfast recipes",
    },
    {
      Image: "two.jpeg",
      name: "Lunch recipes",
    },
    {
      Image: "three.jpeg",
      name: "Dinner recipes",
    },
    {
      Image: "four.jpeg",
      name: "Appetizer recipes",
    },
    {
      Image: "five.jpeg",
      name: "Salad recipes",
    },
    {
      Image: "six.jpeg",
      name: "Pizza recipes",
    },
    {
      Image: "seven.jpeg",
      name: "Smoothie recipes",
    },
    {
      Image: "eight.jpeg",
      name: "Pasta recipes",
    },
  ];
  const mblcategroy = [
 
    {
      Image: "two.jpeg",
      name: "Lunch recipes",
    },
    {
      Image: "three.jpeg",
      name: "Dinner recipes",
    },
   
   
    {
      Image: "six.jpeg",
      name: "Pizza recipes",
    },
    {
      Image: "seven.jpeg",
      name: "Smoothie recipes",
    },
 
  ];
  return (
    <>
      <div className="main">
        <h1 style={{ textAlign: "left", marginLeft: "50px" }}>
          Popular Categories
        </h1>
        <h2 className="mobile-hide">
          <a href="">View more</a>
        </h2>
        <div className="card-div-pairnt">
          {categroy.map((t, index) => (
            <div key={index} className="card-div">
              <img src={t.Image} alt="images" className="width-persnol"/>
              <b >{t.name}</b>
            </div>
          ))}
        </div>
        <div className="card-div-pairnt-mbl">
          {mblcategroy.map((t, index) => (
            <div key={index} className="card-div-mbl">
              <img src={t.Image} alt="images" className="width-persnol-mbl"/>
              <b >{t.name}</b>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCategorieComponant;
