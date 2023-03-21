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

export const gymDataBySearch = (cityName) => async (dispatch) => {
     try {
          const url = `https://devapi.wtfup.me/gym/nearestgym?at=30.325488815850512&long=78.0042384802231`;
          const result = await axios.get(url);
          const { data } = result.data;
          console.log("gymnearby", data);
          // dispatch(gymActions.updateGymList(data));
     } catch (error) {
          console.log("error", error);
     }
};

export const findCoordinate = async (cityName) => {
     try {
          const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
          const Response = await fetch(URL);
          const cityList = await Response.json();
          console.log("cityList result", cityList);

          // if (cityList.results) {
          //      dispatch(weatherActions.updateCityListNames(cityList.results));
          // } else {
          //      dispatch(weatherActions.updateCityListNames(false));
          // }
     } catch (error) {
          console.log(error);
     }
};
