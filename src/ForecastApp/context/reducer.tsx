import initialState from "./initialState";

type AppState = typeof initialState;
type Action =
  | { type: "SET_WEATHER_VALUE"; payload: Object }
  | { type: "SET_INPUT_VALUE_TO_100" };

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_WEATHER_VALUE":
      return {
        ...state,
        weatherDataItems: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
