export default function Header({
  handle_search_click,
  handle_suprise_click,
  setValue
}) {
  function handle_value(event) {
    setValue(event.target.value);
  }
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-center">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handle_value}
          />
          <button
            className="btn btn-outline-success mx-2"
            type="submit"
            onClick={handle_search_click}
          >
            Search
          </button>
          <button
            className="btn btn-outline-success mx-2"
            type="submit"
            onClick={handle_suprise_click}
          >
            Surprise Me!
          </button>
        </form>
      </div>
    </nav>
  );
}
