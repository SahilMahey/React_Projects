import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader/MainHeader";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Error from "./Components/Error/Error";

export default function App() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        employee_name: "John Doe",
        employee_designation: "Manager",
        team_name: "Team A",
        gender: "Male"
      },
      {
        id: 2,
        employee_name: "Jane Smith",
        employee_designation: "Developer",
        team_name: "Team B",
        gender: "Female"
      },
      {
        id: 3,
        employee_name: "Alex Johnson",
        employee_designation: "Designer",
        team_name: "Team C",
        gender: "Male"
      },
      {
        id: 4,
        employee_name: "Sarah Brown",
        employee_designation: "Analyst",
        team_name: "Team A",
        gender: "Female"
      },
      {
        id: 5,
        employee_name: "Michael Wilson",
        employee_designation: "Manager",
        team_name: "Team B",
        gender: "Male"
      },
      {
        id: 6,
        employee_name: "Emily Davis",
        employee_designation: "Developer",
        team_name: "Team C",
        gender: "Female"
      },
      {
        id: 7,
        employee_name: "Robert Miller",
        employee_designation: "Designer",
        team_name: "Team A",
        gender: "Male"
      },
      {
        id: 8,
        employee_name: "Jessica Lee",
        employee_designation: "Analyst",
        team_name: "Team B",
        gender: "Female"
      },
      {
        id: 9,
        employee_name: "David Clark",
        employee_designation: "Manager",
        team_name: "Team C",
        gender: "Male"
      }
    ]
  );

  const [team, setTeam] = useState("Team B");

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  });
  function handle_team_change(event) {
    setTeam(event.target.value);
  }
  function get_info(event) {
    let maker = employees.map((element) => {
      if (element.id.toString() === event.currentTarget.getAttribute("id")) {
        if (element.team_name !== "" && element.team_name !== team) {
          element.team_name = team;
          event.currentTarget.classList.add("active");
        } else if (element.team_name === team) {
          element.team_name = "";
          event.currentTarget.classList.remove("active");
        } else {
          element.team_name = team;
          event.currentTarget.classList.add("active");
        }
      }
      return element;
    });

    setEmployees(maker);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainHeader
              count={employees.filter((obj) => obj.team_name === team).length}
              team={team}
            />
          }
        >
          <Route
            index
            element={
              <Home
                team={team}
                employees={employees}
                get_info={get_info}
                handle_team_change={handle_team_change}
              />
            }
          />
          <Route
            path="Team"
            element={
              <Team employees={employees} team={team} setTeam={setTeam} />
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
