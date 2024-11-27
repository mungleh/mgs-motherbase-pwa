import styled from "styled-components";
import React from "react";

const StyledContainer = styled.div`
  height: 100%;
  background-color: "orange";
`;

const StyledView = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default StyledView;