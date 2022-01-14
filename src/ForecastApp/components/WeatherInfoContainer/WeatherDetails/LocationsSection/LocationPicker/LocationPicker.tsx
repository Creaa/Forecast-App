import React, { useContext, useState } from "react";
import { ContextWrapper } from "../../../../../context/AppContext";
import { fetchForcast } from "../../../../../gateway/fetchForecast";
import { findCachedElement } from "../../../../../utils/findCachedElement";

import { Container, InputField, Button, Icon } from "./LocationPicker-styling";

const LocationPicker = () => {
  const {
    dispatch,
    state: { dataCache }
  } = useContext(ContextWrapper);
  const [inputValue, setInputValue] = useState("");

  const onClickHandler = () => {
    if (inputValue) {
      const cachedElement = findCachedElement(inputValue, dataCache);
      if (cachedElement) {
        return dispatch({ type: "LOAD_FROM_CACHE", payload: cachedElement });
      }
      fetchForcast(inputValue, dispatch);
      setInputValue("");
    }
  };

  return (
    <Container>
      <InputField
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Location name"
      />
      <Button onClick={onClickHandler}>
        <Icon className="override" />
      </Button>
    </Container>
  );
};

export default LocationPicker;
