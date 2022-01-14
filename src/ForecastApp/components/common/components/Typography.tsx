import React from "react";
import styled from "styled-components";

const TypgraphyComponent = styled.p`
  margin: 0;
  color: #f6eeeb;
  font-size: 18px;
`;

const Typography = ({ children, className, ...props }: any) => {
  return (
    <TypgraphyComponent {...props} className={className}>
      {children}
    </TypgraphyComponent>
  );
};

export default Typography;
