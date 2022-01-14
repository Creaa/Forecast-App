import clear from "../assets/weatherBackgrounds/clear.jpg";
import clouds from "../assets/weatherBackgrounds/clouds.jpg";
import drizzle from "../assets/weatherBackgrounds/drizzle.jpg";
import rain from "../assets/weatherBackgrounds/rain.jpg";
import snow from "../assets/weatherBackgrounds/snow.jpg";
import thunderstorm from "../assets/weatherBackgrounds/thunderstorm.jpg";
import fallback from "../assets/weatherBackgrounds/fallback.jpg";

export const mapDataToBackground = (data: string) => {
  switch (data) {
    case "clear":
      return clear;
      break;
    case "clouds":
      return clouds;
      break;
    case "drizzle":
      return drizzle;
      break;
    case "rain":
      return rain;
      break;
    case "snow":
      return snow;
      break;
    case "thunderstorm":
      return thunderstorm;
      break;
    default:
      return fallback;
      break;
  }
};
