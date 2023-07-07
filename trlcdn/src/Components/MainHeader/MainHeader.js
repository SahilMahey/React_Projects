import { NavLink, Outlet } from "react-router-dom";
import "./MainHeader.css";

export default function MainHeader(props) {
  return (
    <div className="main_header_container">
      <ul className="navbar">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="Team" end>
          Team
        </NavLink>
      </ul>
      <div className="count_container">
        <h1>Team Allocation</h1>
        <p>
          {props.team} has {props.count}{" "}
          {props.count === 1 ? "member" : "members"}
        </p>
      </div>
      <Outlet />
    </div>
  );
}
