import "./Employee.css";
export default function Employee({ team, employees, get_info }) {
  return (
    <div className="employee_container">
      {employees.map((employee) => {
        return (
          <div
            key={employee.id}
            id={employee.id.toString()}
            className={team === employee.team_name ? "card active" : "card"}
            onClick={get_info}
          >
            <img
              src={`${
                employee.gender === "Female"
                  ? "https://www.w3schools.com/howto/img_avatar2.png"
                  : "https://www.w3schools.com/howto/img_avatar.png"
              }`}
              alt="Avatar"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="container">
              <h4>
                <b>{employee.employee_name}</b>
              </h4>
              <p>{employee.employee_designation}</p>
              <p>{employee.team_name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
