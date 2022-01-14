import styled from "styled-components";
import Typography from "../../../common/components/Typography";

const mode = (arr: number[]) => {
  const mode: any = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return max;
};

const WeatherDescriptionElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const WeatherDescriptionElementData = styled(Typography)`
  font-weight: bold;
`;

const WeatherInfoComponent = ({ label, value }: any) => {
  return (
    <WeatherDescriptionElementContainer>
      <WeatherDescriptionElementData>{label}</WeatherDescriptionElementData>
      <WeatherDescriptionElementData>{value}</WeatherDescriptionElementData>
    </WeatherDescriptionElementContainer>
  );
};

const mapDataToComponents = (data: any) => {
  if (!data) return;

  const dailyTemperatures = data.map((el: any) => el.main.temp).sort();

  return (
    <div>
      <WeatherInfoComponent
        label="Min temperature"
        value={dailyTemperatures[0]}
      />
      <WeatherInfoComponent
        label="Max temperature"
        value={dailyTemperatures[dailyTemperatures.length - 1]}
      />
      <WeatherInfoComponent
        label="Mean value"
        value={Math.floor(
          dailyTemperatures.reduce((a: number, b: number) => a + b, 0) /
            dailyTemperatures.length || 0
        ).toFixed(2)}
      />
      <WeatherInfoComponent
        label="Mode value"
        value={mode(dailyTemperatures)}
      />
    </div>
  );
};

export { mode, mapDataToComponents };
