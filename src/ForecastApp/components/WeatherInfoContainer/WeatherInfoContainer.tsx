import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ContextWrapper } from "../../context/AppContext";
import { fetchForcast } from "../../gateway/fetchForecast";
import WeatherPreview from "./WeathePreview/WeatherPreview";
import WeatherDetailsContainer from "./WeatherDetails/WeatherDetailsContainer";
import { mapDataToBackground } from "../../utils/mapDataToBackground";
import Typography from "../common/components/Typography";
import pickRandomLocation from "../../utils/pickRandomLocation";

const Container = styled.div<Props>`
  @keyframes animatedBackground {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  background-image: ${(props: any) =>
    `url(${mapDataToBackground(props.backgroundName)})`};
  background-position: 0px 0px;
  transition: 2s;
  background-repeat: repeat-x;
  animation: animatedBackground 60s linear infinite alternate;
`;

interface Props {
  backgroundName: string;
  setBackgroundName: Function;
}

const WeatherInfoContainer = ({ backgroundName, setBackgroundName }: Props) => {
  const { dispatch, state } = useContext(ContextWrapper);
  const [dataToDisplay, setDataToDisplay] = useState(0);

  useEffect(() => {
    fetchForcast(pickRandomLocation(), dispatch);
  }, []);

  // I would have done loader, but no time :/

  if (!state.weatherDataItems) return <Typography>Loading</Typography>;

  return (
    <Container
      setBackgroundName={setBackgroundName}
      backgroundName={backgroundName}
    >
      <WeatherPreview
        dataToDisplay={dataToDisplay}
        setDataToDisplay={setDataToDisplay}
        setBackgroundName={setBackgroundName}
      />
      <WeatherDetailsContainer dataToDisplay={dataToDisplay} />
    </Container>
  );
};

export default WeatherInfoContainer;
