import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import "./Card.css";
import { useState, useEffect } from "react";

export default function Card({
  element,
  setFavourite_array,
  favourite_array,
  handle_modal, select_meal
}) {

  useEffect(() => {
    // Update local storage whenever favourite_array changes
    localStorage.setItem("favorites", JSON.stringify(favourite_array));
  }, [favourite_array]);

  function add_favourite(event) {
    event.preventDefault();
    let maker = [];
    let val = true;
    if (favourite_array.length !== 0) {
      maker = favourite_array.map((e) => {
        if (e.idMeal === element.idMeal) {
          alert("Dish is already added in Favourite section");
          val = false;
        }
        return e;
      });
      if (val) {
        maker.push(element);
        setFavourite_array(maker);
        
      }
    } else {
      maker.push(element);
      setFavourite_array(maker);
    }
    
  }

  function handle_dish(event)
  {
    select_meal(event.currentTarget.getAttribute("id"),null);
    handle_modal()

  }
  return (
    <>
      <div className="card">
        <img
          src={element.strMealThumb}
          id={element.idMeal}
          alt="Avatar"
          style={{ width: "100%" }}
          onClick={handle_dish}
        />
        <div className="container d-flex justify-content-around">
          <h4>
            <b>{element.strMeal}</b>
          </h4>
          <button onClick={add_favourite}>
            <ThumbUpOffAltIcon />
          </button>
        </div>
      </div>
    </>
  );
}
