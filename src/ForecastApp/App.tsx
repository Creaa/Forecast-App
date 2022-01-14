import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WeatherInfoContainer from "./components/WeatherInfoContainer/WeatherInfoContainer";
import { ContextProvider } from "./context/AppContext";
import { mapDataToBackground } from "./utils/mapDataToBackground";

interface Props {
  backgroundName: string;
}

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2;
  margin-left: 20px;
  margin-right: 20px;
`;

const BackgroundContainer = styled.div<Props>`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  display: block;
  background-image: ${props =>
    `url(${mapDataToBackground(props.backgroundName)})`};
  background-size: cover;
  width: 100%;
  height: 100vh;
  filter: blur(15px);
  transition: left 2s;
  -webkit-transition: left 2s;
  -moz-transition: left 2s;
  -o-transition: left 2s;
`;

// For purpose of training and learning I decided to use context API.
// Project is too small for that. In normal case I would pass handlers, states as props drilling.
// But that's first time with context api, so I really want to use it and practice :)

const App = () => {
  const [backgroundName, setBackgroundName] = useState("");

  return (
    <div>
      <BackgroundContainer
        backgroundName={backgroundName}
      ></BackgroundContainer>
      <AppContainer>
        <ContextProvider>
          <WeatherInfoContainer
            backgroundName={backgroundName}
            setBackgroundName={setBackgroundName}
          />
        </ContextProvider>
      </AppContainer>
    </div>
  );
};

export default App;
