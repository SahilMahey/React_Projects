import "./styles.css";
import Header from "./Components/Header/Header";
import Dish from "./Components/Dish/Dish";
import Favourite from "./Components/Favourite/Favourite";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal/Modal";

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem('favorites');
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem('favorites'))
  }
  else {
    favorites = []
  }
  return favorites
}


export default function App() {
  const [array, setArray] = useState([]);
  const [meal, setMeal] = useState(null);
  const [favourite_array, setFavourite_array] = useState(getFavoritesFromLocalStorage());
  const [value_, setValue] = useState("");
  const [modal, showModal] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    const meals_array = async () => {
      let data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${value_}`
      );
      if (data.ok) {
        let value = await data.json();
        setArray(value);
      }
    };
    meals_array();
  }, []);

  const handle_search_click = async (event) => {
    event.preventDefault();
    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value_}`
    );
    let value = await data.json();

    if (value.meals !== null) {
      setArray(value);
    }
  };
  function handle_modal(event) {
 
   
    showModal(true);
    console.log(modal);
  }

  const handle_suprise_click = async (event) => {
    event.preventDefault();
    let data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    let value = await data.json();
    setArray(value);
  };

  const select_meal = (idMeal1, idMeal2) => {
    let selected;
    if (idMeal1) {
      selected = array.meals.filter((element) => {
        return element.idMeal === idMeal1;
      });
    } else {
      selected = favourite_array.filter((element) => {
        return element.idMeal === idMeal2;
      });
    }

    setMeal(selected);
  };
  return (
    <div className="app_container">
      <Header
        handle_search_click={handle_search_click}
        handle_suprise_click={handle_suprise_click}
        setValue={setValue}
      />
      {favourite_array.length === 0 ? (
        ""
      ) : (
        <Favourite
          favourite_array={favourite_array}
          setFavourite_array={setFavourite_array}
          handle_modal={handle_modal}
          select_meal={select_meal}
        />
      )}
      {array.length === 0 ? (
        ""
      ) : (
        <Dish
          array={array}
          setFavourite_array={setFavourite_array}
          favourite_array={favourite_array}
          handle_modal={handle_modal}
          select_meal ={select_meal}
        />
      )}
      {modal && <Modal showModal={showModal} meal={meal} />}
    </div>
  );
}
