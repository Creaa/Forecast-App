import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "../../../common/components/Typography";
import { onArrowTimeClick, onArrowDateClick, parseTimestampToHours } from "./WheatherPreviewDataTool.utils";

const Container = styled.div`
  align-self: center;
  margin-bottom: auto;
  margin-top: 50px;
`;

// @todo: Imrpove this (add animations, onswipe etc)

const Carousel = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-bottom: auto;
  color: white;
  margin: 20px 0px;
  cursor: pointer;
`;

const CarouselWrapper = ({ value, dataName, onClickHandler }: any) => {
  return (
    <Carousel>
      <ArrowBackIcon
        data-direction="back"
        data-name={dataName}
        onClick={onClickHandler}
      />
      <Typography>{value}</Typography>
      <ArrowForwardIcon
        data-direction="forward"
        data-name={dataName}
        onClick={onClickHandler}
      />
    </Carousel>
  );
};

const defaultState = {
  timeIndex: 0,
  dateIndex: 0
};

interface Hours {
    timestamps: number[]
}

interface Props {
    setDataToDisplay: Function,
    dateOptions: { [k: string]: Hours };
}

const WeatherPreviewDataTool = ({ dateOptions, setDataToDisplay }: Props) => {

  const [date, setDate] = useState({
    ...defaultState
  });
  

  const dateOptionsKeys = dateOptions && Object.keys(dateOptions);
  const timeOptions = dateOptions[dateOptionsKeys[date.dateIndex]]?.timestamps || [];
  const onArrowTimeClickHandler = onArrowTimeClick(setDate, timeOptions);
  const onArrowDateClickHandler = onArrowDateClick(setDate, dateOptionsKeys);


  useEffect(() => {
    setDate({
      ...defaultState
    });
  }, [dateOptions]);
  

  useEffect(() => {
      setDataToDisplay(timeOptions[date.timeIndex])
  }, [date]);
  

  return (
    <Container>
      <CarouselWrapper value={dateOptionsKeys[date.dateIndex]} onClickHandler={onArrowDateClickHandler} />
      <CarouselWrapper value={parseTimestampToHours(timeOptions[date.timeIndex])} onClickHandler={onArrowTimeClickHandler} />
    </Container>
  );
};

export default WeatherPreviewDataTool;
