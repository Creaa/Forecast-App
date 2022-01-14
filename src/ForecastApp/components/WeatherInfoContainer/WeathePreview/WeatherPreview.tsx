import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ContextWrapper } from "../../../context/AppContext";
import { List, WeatherDataItems } from "../../../interfaces/interfaces";
import WeatherPreviewDataTool from "./WeatherPreviewDateTool/WheatherPreviewDataTool";
import WeatherPreviewInfo from "./WeatherPreviewInfo/WeatherPreviewInfo";

// Todo: change name of that component.

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 150px;
  margin-left: 80px;
`;

const getDateOptions = (data: WeatherDataItems) => {

  if (data) {

    const { list } = data;

    let result: any = {};

    list.map((element: List) => {

      const date = new Date(element.dt * 1000).toISOString().split("T")[0];

      const array = result[date]?.timestamps;

      return result[date] = {
        ...result[date],
        timestamps: array ? [...array, element.dt] : [element.dt],
      };
    });

    return result;

  } else return null;
};

interface Props {
  setDataToDisplay: Function,
  dataToDisplay: number,
  setBackgroundName: Function
}

const WeatherPreview = ({setDataToDisplay, dataToDisplay, setBackgroundName}: Props) => {

  const { state } = useContext(ContextWrapper);

  const {weatherDataItems}: any = state;

  const [dateOptions, setDateOptions] = useState({});

  useEffect(() => {
    const options = getDateOptions(weatherDataItems)
    setDateOptions(options);
  }, [state.weatherDataItems])

  getDateOptions(weatherDataItems);

  return (
    <Container>
      <WeatherPreviewDataTool setDataToDisplay={setDataToDisplay} dateOptions={dateOptions}/>
      <WeatherPreviewInfo setBackgroundName={setBackgroundName} dataToDisplay={dataToDisplay} />
    </Container>
  );
};

export default WeatherPreview;
