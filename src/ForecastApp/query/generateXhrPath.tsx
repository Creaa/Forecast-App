import { CITY } from "./params";
import { GET_FIVE_DAYS_FORECAST } from "./requestPath";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const generateXhrPath = {
  forNextFiveDaysForecast: (city: string) =>
    `${BASE_URL}` + GET_FIVE_DAYS_FORECAST.replace(`:${CITY}`, city),
  downloadWeatherIcon: (id: string) =>
    `http://openweathermap.org/img/w/${id}.png`
};

export default generateXhrPath;
