import Card from "../Card/Card";
import "./Dish.css";
export default function Dish({
  array,
  setFavourite_array,
  favourite_array,
  handle_modal,
  select_meal
}) 
{

  
  return (
    <div className="dish_container">
      {array.meals.map((element) => {
        return (
          <Card
            key={element.idMeal}
            element={element}
            setFavourite_array={setFavourite_array}
            favourite_array={favourite_array}
            handle_modal={handle_modal}
            select_meal = {select_meal}
          />
        );
      })}
    </div>
  );
}
