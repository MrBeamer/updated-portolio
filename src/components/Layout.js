import * as React from "react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import styled from "styled-components";

// color: ${(props) => (props.theme === "purple" ? "purple" : "white")};

// combination from a custom css reset(html target) and css normalize ($normalize) to make less aggressive and easier to debug also used a special version of normalize for styled components - used GlobalStyle to pass on styles to other components - you should use in general a layout components to inherit styles to other components easier

const GlobalStyle = createGlobalStyle`
${normalize}

html{  *,
*::before,
*::after{box-sizing:border-box;}
a{text-decoration:none; color:inherit; cursor:pointer;}
button{background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;}
figure{margin:0;}
p{margin:0;}
input::-moz-focus-inner {border:0; padding:0; margin:0;}
ul, ol, dd{margin:0; padding:0; list-style:none;}
h1, h2, h3, h4, h5, h6{margin:0; font-size:inherit; font-weight:inherit;}
}
  body { 
  background-color: #151515;
  color: #ffffff;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.125rem;
  }
`;

const StyledLayout = styled.div`
  margin: 0 30px;
  @media only screen and (max-width: 767px) {
    margin: 0 16px;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      {children}
    </StyledLayout>
  );
};

export default Layout;
