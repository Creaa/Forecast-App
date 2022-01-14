import styled from "styled-components";
import Typography from "../../../common/components/Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 20px 70px;
`;

const LocationContainer = styled.div``;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Location = styled(Typography)`
  font-size: 40px;
`;

const Temperature = styled(Typography)`
  font-size: 100px;
`;

const Icon = styled.i`
  color: #fff;
  font-size: 25px;
  align-self: center;
`;

export {
  Container,
  LocationContainer,
  StatusContainer,
  Location,
  Temperature,
  Icon
};
