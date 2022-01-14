import React from "react";
import styled from "styled-components";
import Divider from "../../../common/components/Divider";
import LocationPicker from "./LocationPicker/LocationPicker";
import LocationsHistoryList from "./LocationsHistoryList/LocationsHistoryList";

const Container = styled.div`
  height: 50%;
`;

const DividerComponent = styled(Divider)`
  width: 80%;
  margin-left: 0;
`;

const LocationsSection = () => {
  return (
    <Container>
      <LocationPicker />
      <LocationsHistoryList />
      <DividerComponent />
    </Container>
  );
};

export default LocationsSection;
