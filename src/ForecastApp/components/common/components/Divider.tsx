import React from "react";
import styled from "styled-components";

const DividerComponent = styled.hr`
  background-color: #8d999f;
  border-color: #8d999f;
  color: #8d999f;
  width: 100%;
`;

const Divider = ({ className }: any) => {
  return <DividerComponent className={className} />;
};

export default Divider;
