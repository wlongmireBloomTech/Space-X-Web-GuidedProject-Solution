import React from "react";

const MissionsList = props => {
  console.log(props.missions);
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error" data-testid="missions-list-error">
          {props.error}
        </div>
      ) : (
        <div data-testid="mission-list">
          {props.missions.map(mission => (
            <div>
              <div
                className="mission"
                data-testid="mission"
                key={mission.mission_id}
              >
                {mission.mission_name}
              </div>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MissionsList;
