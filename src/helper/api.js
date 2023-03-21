import { gymActions } from "../redux/gymSlice";
import axios from "axios";
export const gymDataApi = () => async (dispatch) => {
     try {
          const url = "https://devapi.wtfup.me/gym/places";
          const result = await axios.get(url);
          const { data } = result.data;
          // console.log("data", data);
          dispatch(gymActions.updateGymList(data));
     } catch (error) {
          console.log("error", error);
     }
};

export const gymDataBySearch = (lat, long) => async (dispatch) => {
     try {
          const url = `https://devapi.wtfup.me/gym/nearestgym?lat=${lat}&long=${long}`;
          const result = await axios.get(url);
          const { data } = result.data;
          console.log("gymnearby", data);
          dispatch(gymActions.updateGymList(data));
     } catch (error) {
          console.log("error", error);
     }
};

export const findCoordinateApi = async (cityName) => {
     try {
          const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
          const result = await axios.get(URL);
          const data = result.data.results[0];
          console.log("city coordinate----", data);
          if (data) {
               return { lat: data.latitude, long: data.longitude };
          } else {
               return false;
          }
     } catch (error) {
          console.log(error);
     }
};
