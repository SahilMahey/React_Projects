import "./Favourite.css";
export default function Favourite({
  favourite_array,
  setFavourite_array,
  handle_modal,
  select_meal
}) {
  function remove_element(event) {
   
    let new_array = favourite_array.filter(
      (element) => element.idMeal !== event.currentTarget.getAttribute("id")
    );
    setFavourite_array(new_array);
    localStorage.setItem("favorites", JSON.stringify(favourite_array))

  }

  function handle_favourite(event)
  {
    select_meal(null,event.currentTarget.getAttribute("id"));
    handle_modal()

  }
  return (
    <div className="favourite_container">
      {favourite_array.map((element) => {
        return (
          <div key={element.idMeal} className="favourite_element">
            <img
              src={element.strMealThumb}
              id={element.idMeal}
              alt="Avatar"
              onClick={handle_favourite}
            />
            <button
              id={element.idMeal}
              type="button"
              className="btn btn-info"
              onClick={remove_element}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
