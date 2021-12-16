import React from "react";

const MissionsList = props => {
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error" data-testid="missions-list-error">
          {props.error}
        </div>
      ) : (
        <div data-testid="mission-list">
          <ul>
          {props.missions.map(mission => (
            <li>
              <div
                className="mission"
                data-testid="mission"
                key={mission.mission_id}
              >
                {mission.mission_name}
              </div>
            </li>
          ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default MissionsList;
