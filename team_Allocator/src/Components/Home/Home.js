import Employee from "../Employee/Employee";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home_container">
      <select value={props.team} onChange={props.handle_team_change}>
        <option value="Team A">Team A</option>
        <option value="Team B">Team B</option>
        <option value="Team C">Team C</option>
      </select>
      <Employee
        team={props.team}
        employees={props.employees}
        get_info={props.get_info}
      />
    </div>
  );
}
