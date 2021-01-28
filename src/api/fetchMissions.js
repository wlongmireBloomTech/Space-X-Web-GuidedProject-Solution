import axios from "axios";

export const fetchMissions = () => {
  return axios
    .get("https://api.spacexdata.com/v3/missions")
    // .get("http://localhost:3000/api/smurfs")
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err.message);
      return err;
    });
};
