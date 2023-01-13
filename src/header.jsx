import React from "react";

const header = ({ selectedTeam, selectedTeamLength }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          {
            <h1>
              selected Team {selectedTeam} have {selectedTeamLength } {selectedTeamLength > 1 ? "Members 🔥":"Member 🔥" }
            </h1>
          }
        </div>
      </div>
    </header>
  );
};

export default header;
