import "./Team.css";
export default function Team({ employees, team, setTeam }) {
  const array = ["Team A", "Team B", "Team C"];

  function handle_team_info(event) {
    setTeam(event.currentTarget.id);
  }
  return (
    <>
      {array.map((element) => {
        return (
          <div key={element} className="team_container">
            <div
              id={element}
              className="team_container_name"
              onClick={handle_team_info}
            >
              <p> {element}</p>
            </div>
            {employees
              .filter((employee) => {
                return employee
                  ? element === team && employee.team_name === team
                  : "";
              })
              .map((employee) => {
                return <p key={employee.id}>{employee.employee_name}</p>;
              })}
          </div>
        );
      })}
    </>
  );
}
