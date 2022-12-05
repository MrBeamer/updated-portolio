import * as React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  border-top: 1px solid #ffffff;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
