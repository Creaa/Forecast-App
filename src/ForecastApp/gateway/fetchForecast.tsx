import axios from "axios";
import generateXhrPath from "../query/generateXhrPath";

export const fetchForcast = (city: string, dispatch: Function) => {
  axios
    .get(generateXhrPath.forNextFiveDaysForecast(city))
    .then(({ data }) => dispatch({ type: "SET_WEATHER_VALUE", payload: data }))
    .catch((err: any) => console.log("error", err));
};
