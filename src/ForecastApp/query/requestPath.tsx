import React from "react";
import { CITY } from "./params";

export const GET_FIVE_DAYS_FORECAST = `forecast?q=:${CITY}&units=metric&&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
