import Header from "./header";
import Footer from "./footer";
import { useState, useEffect } from "react";
import Employee from "./employee";
import Navbar from "./nav";
import PageNotFound from "./pageNotFound";
import * as React from "react";
import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import GroupTeamMembers from "./GroupTeamMembers";


function App(){

    const [selectedTeam, setTeam] = useState(
      JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
    );
         
    const [employees, setEmployees] = useState(
      JSON.parse(localStorage.getItem("employeeList")) || [
        {
          id: 1,
          fullName: "Bob Jones",
          designation: "JavaScript Developer",
          gender: "male",
          teamName: "TeamA",
        },
        {
          id: 2,
          fullName: "Jill Bailey",
          designation: "Node Developer",
          gender: "female",
          teamName: "TeamA",
        },
        {
          id: 3,
          fullName: "Gail Shepherd",
          designation: "Java Developer",
          gender: "female",
          teamName: "TeamA",
        },
        {
          id: 4,
          fullName: "Sam Reynolds",
          designation: "React Developer",
          gender: "male",
          teamName: "TeamB",
        },
        {
          id: 5,
          fullName: "David Henry",
          designation: "DotNet Developer",
          gender: "male",
          teamName: "TeamB",
        },
        {
          id: 6,
          fullName: "Sarah Blake",
          designation: "SQL Server DBA",
          gender: "female",
          teamName: "TeamB",
        },
        {
          id: 7,
          fullName: "James Bennet",
          designation: "Angular Developer",
          gender: "male",
          teamName: "TeamC",
        },
        {
          id: 8,
          fullName: "Jessica Faye",
          designation: "API Developer",
          gender: "female",
          teamName: "TeamC",
        },
        {
          id: 9,
          fullName: "Lita Stone",
          designation: "C++ Developer",
          gender: "female",
          teamName: "TeamC",
        },
        {
          id: 10,
          fullName: "Daniel Young",
          designation: "Python Developer",
          gender: "male",
          teamName: "TeamD",
        },
        {
          id: 11,
          fullName: "Adrian Jacobs",
          designation: "Vue Developer",
          gender: "male",
          teamName: "TeamD",
        },
        {
          id: 12,
          fullName: "Devin Monroe",
          designation: "Graphic Designer",
          gender: "male",
          teamName: "TeamD",
        },
      ]
    );

   
    useEffect(()=>{
        localStorage.setItem('employeeList',JSON.stringify(employees));
    },[employees]);

    useEffect(()=>{
        localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));

    },[selectedTeam]);
 

    function handleTeamSelection(event) {
      setTeam(event.target.value);
    }

    function handleCardClick(event) {
      const transformedEmployees = employees.map((employee) =>
        employee.id === parseInt(event.currentTarget.id)
          ? employee.teamName === selectedTeam
            ? { ...employee, teamName: "" }
            : { ...employee, teamName: selectedTeam }
          : employee
      );
      setEmployees(transformedEmployees);
    }


    return (
      <Router>
        <Navbar />
        <Header
          selectedTeam={selectedTeam}
          selectedTeamLength={
            employees.filter((employee) => employee.teamName === selectedTeam)
              .length
          }
        />
        <Routes>
          <Route
            path="/"       
            element={
              <Employee
                employees={employees}
                selectedTeam={selectedTeam}
                handleCardClick={handleCardClick}
                handleTeamSelection={handleTeamSelection}
              />
            }
          ></Route>

          <Route
            path="/GroupTeamMemebers"
            element={
            <GroupTeamMembers 
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam = {setTeam}
            />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;

