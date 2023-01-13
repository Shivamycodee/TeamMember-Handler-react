 import maleProfile from "./images/maleProfile.jpg";
 import femaleProfile from "./images/femaleProfile.jpg";
 import React from "react";
 import Teams from "./teams";



const Employee = ({employees,selectedTeam,handleCardClick,handleTeamSelection}) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">

          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelection={handleTeamSelection}
          />
          
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                id={employee.id}
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleCardClick}
              >
                {employee.gender === "male" ? (
                  <img src={maleProfile} alt="" className="card-img-top" />
                ) : (
                  <img src={femaleProfile} alt="" className="card-img-top" />
                )}

                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation: </b>
                    {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;