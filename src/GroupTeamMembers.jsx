import React from "react";
import {useState} from "react"

const GroupTeamMembers = ({ employees,selectedTeam, setTeam }) => {

  const [GroupedEmployees,SetGroupedData] = useState(getTeamEmployee());

 function getTeamEmployee(){
      var teams = [];

     

      var TeamMemberA = employees.filter((employee)=> employee.teamName === "TeamA");
            var TeamA = {
              TeamName: "TeamA",
              TeamMember: TeamMemberA,
              collapse: selectedTeam === "TeamA" ? false : true,
            };
        teams.push(TeamA);


      var TeamMemberB = employees.filter((employee)=> employee.teamName === "TeamB");
            var TeamB = {
              TeamName: "TeamB",
              TeamMember: TeamMemberB,
              collapse: selectedTeam === "TeamB" ? false : true,
            };

      teams.push(TeamB);

      var TeamMemberC = employees.filter((employee)=> employee.teamName === "TeamC");
            var TeamC = {
              TeamName: "TeamC",
              TeamMember: TeamMemberC,
              collapse: selectedTeam === "TeamC" ? false : true,
            };

      teams.push(TeamC);

      var TeamMemberD = employees.filter((employee)=> employee.teamName === "TeamD");
            var TeamD = {
              TeamName: "TeamD",
              TeamMember: TeamMemberD,
              collapse: selectedTeam === "TeamD" ? false : true,
            };
      teams.push(TeamD);

      return teams;
  }

  function handleTeamData(event){
     var newGroupData = GroupedEmployees.map((item)=> item.TeamName === event.currentTarget.id ?
       {...item,collapse:!item.collapse}:item)
       SetGroupedData(newGroupData);
       setTeam(event.currentTarget.id);
  }


  return (
    <main className="container">
      {
        GroupedEmployees.map((item)=>{
      return(
          <div key={item.TeamName} className="card mt-2" style={{cursor:"pointer"}}>
            <h4 id={item.TeamName} className="card-header text-secondary bg-white" onClick={handleTeamData}>
              Team Name: {item.TeamName}
            </h4>
            <div id={"collapse-"+item.TeamName} 
            className={item.collapse ? "collapse":" "}
            >
            <hr />
            {
              item.TeamMember.map((member)=>{
                return  (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                    <span className="text-dark">Employee Name: {member.fullName}</span>
                    </h5>
                    </div>
                )
              })
            }
            </div>
          </div>
        )})
      }
    </main>
  );
};

export default GroupTeamMembers;
