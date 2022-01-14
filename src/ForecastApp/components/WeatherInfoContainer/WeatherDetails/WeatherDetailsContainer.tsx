import React from "react";
import styled from "styled-components";
import LocationsSection from "./LocationsSection/LocationsSection";
import WeatherDetailsSection from "./WeatherDetailsSection/WeatherDetailsSection";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  height: 100%;
  width: 35%;
  padding-left: 5%;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

interface Props {
  dataToDisplay: number;
}

const WeatherDetailsContainer = ({ dataToDisplay }: Props) => {
  return (
    <Container>
      <LocationsSection />
      <WeatherDetailsSection dataToDisplay={dataToDisplay} />
    </Container>
  );
};

export default WeatherDetailsContainer;
