import React, { useContext } from "react";
import styled from "styled-components";
import { ContextWrapper } from "../../../../../context/AppContext";
import { fetchForcast } from "../../../../../gateway/fetchForecast";
import { findCachedElement } from "../../../../../utils/findCachedElement";
import Typography from "../../../../common/components/Typography";

const Container = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 20px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
`;

const LocationElement = styled(Typography)`
  color: #8d999f;
  margin: 20px 0;
  cursor: pointer;
`;

const LocationsHistoryList = () => {
  const { state, dispatch } = useContext(ContextWrapper);

  const { dataCache } = state;

  const onElementClickHandler = (city: string) => {
    const cachedElement = findCachedElement(city, dataCache);
    if (cachedElement) {
      return dispatch({ type: "LOAD_FROM_CACHE", payload: cachedElement });
    }
    fetchForcast(city, dispatch);
  };

  const renderCachedElements = () => {
    return dataCache.map((element: any) => (
      <LocationElement
        onClick={() => onElementClickHandler(element.city.name)}
        key={element.city.id}
      >
        {element.city.name}
      </LocationElement>
    ));
  };

  return <Container>{renderCachedElements()}</Container>;
};

export default LocationsHistoryList;
