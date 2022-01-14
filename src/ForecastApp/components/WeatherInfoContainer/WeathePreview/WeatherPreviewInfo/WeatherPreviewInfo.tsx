import { useContext, useEffect } from "react";
import Typography from "../../../common/components/Typography";
import {
  Container,
  StatusContainer,
  Icon,
  Temperature,
  LocationContainer,
  Location
} from "./WeatherPreviewInfo-styling";
import { ContextWrapper } from "../../../../context/AppContext";
import generateXhrPath from "../../../../query/generateXhrPath";

interface Props {
  dataToDisplay: number;
  setBackgroundName: Function;
}

const WeatherPreviewInfo = ({ dataToDisplay, setBackgroundName }: Props) => {
  const { state } = useContext(ContextWrapper);
  const {
    weatherDataItems: {
      list,
      city: { name }
    }
  }: any | {} = state;

  const filterItemFromList = () => {
    return list.filter((element: any) => element.dt === dataToDisplay);
  };

  const data = filterItemFromList()[0];

  useEffect(() => {
    if (!data) return;

    const { weather } = data;
    const weatherInformation = weather[0];

    setBackgroundName(`${weatherInformation.main}`.toLowerCase());
  }, [dataToDisplay, name]);

  if (!data) return null;

  const { dt, main, weather } = data;
  const weatherInformation = weather[0];

  return (
    <Container>
      <StatusContainer>
        <Icon>
          <img
            src={generateXhrPath.downloadWeatherIcon(weatherInformation.icon)}
          />
        </Icon>
        <Typography>{weatherInformation.main}</Typography>
      </StatusContainer>
      <Temperature>{Math.ceil(main.temp)}&deg;</Temperature>
      <LocationContainer>
        <Location>{name}</Location>
        <Typography>{new Date(dt * 1000).toLocaleString()}</Typography>
      </LocationContainer>
    </Container>
  );
};

export default WeatherPreviewInfo;
