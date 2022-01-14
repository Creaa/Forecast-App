import React, { createContext, useReducer } from "react";
import { WeatherDataItems } from "../interfaces/interfaces";
import initialState from "./initialState";

type AppState = {
  weatherDataItems?: WeatherDataItems | null;
  location: string;
  units: string;
  dataCache: any;
};

type Action =
  | { type: "SET_WEATHER_VALUE"; payload: any }
  | { type: "LOAD_FROM_CACHE"; payload: any };

interface ContexrProviderProps {
  children: React.ReactNode;
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_WEATHER_VALUE":
      return {
        ...state,
        weatherDataItems: action.payload,
        dataCache: [...state.dataCache, action.payload]
      };
    case "LOAD_FROM_CACHE":
      return {
        ...state,
        weatherDataItems: action.payload
      };
    default:
      return state;
  }
};

const ContextWrapper = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function ContextProvider({ children }: ContexrProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextWrapper.Provider value={{ state, dispatch }}>
      {children}
    </ContextWrapper.Provider>
  );
}

export { ContextWrapper, ContextProvider };
