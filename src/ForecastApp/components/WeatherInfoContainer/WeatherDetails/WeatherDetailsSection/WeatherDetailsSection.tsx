import React, { useContext } from "react";
import styled from "styled-components";
import { ContextWrapper } from "../../../../context/AppContext";
import Typography from "../../../common/components/Typography";
import { mapDataToComponents, mode } from "./WeatherDetailsSection.utils";

const Container = styled.div`
  width: 80%;
`;

const Title = styled(Typography)`
  margin-bottom: 40px;
  font-weight: bold;
`;

interface Props {
  dataToDisplay: number;
}

const WeatherDetailsSection = ({ dataToDisplay }: Props) => {
  const { state } = useContext(ContextWrapper);

  const {
    weatherDataItems: { list }
  }: any = state;

  const filterItemsFromList = () => {
    if (dataToDisplay) {
      return list.filter(
        (element: any) =>
          new Date(element.dt * 1000).toISOString().split("T")[0] ===
          new Date(dataToDisplay * 1000).toISOString().split("T")[0]
      );
    }
  };

  const data = filterItemsFromList();

  return (
    <Container>
      <Title>Daily Weather Details</Title>
      {mapDataToComponents(data)}
    </Container>
  );
};

export default WeatherDetailsSection;
