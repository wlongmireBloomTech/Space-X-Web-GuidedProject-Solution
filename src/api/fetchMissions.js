import axios from "axios";

export const fetchMissions = () => {
  return axios
    .get("https://api.spacexdata.com/v3/missions")
    // .get("https://localhost:3333/smurfs")
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};
