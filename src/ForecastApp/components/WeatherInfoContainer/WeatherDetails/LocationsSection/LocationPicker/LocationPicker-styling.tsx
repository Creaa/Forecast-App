import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  height: 30%;
  display: flex;
  align-items: flex-end;
`;

const Button = styled.button`
  margin-left: auto;
  width: 125px;
  height: 100%;
  background-color: #d66c04;
  align-self: flex-start;
  cursor: pointer;
  outline: none;
`;

const InputField = styled.input`
  background-color: transparent;
  border: 0;
  color: #8d999f;
  font-size: 30px;
  border-bottom: 1px solid #8d999f;
  ::placeholder {
    color: #8d999f;
    font-size: 20px;
    opacity: 1; /* Firefox */
  }
  outline: none;
  width: 60%;
  height: 40px;
`;

const Icon = styled(SearchIcon)`
  &.override {
    font-size: 50px;
  }
`;

export { Container, Button, InputField, Icon };
