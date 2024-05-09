import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 html{
     font-size: 62.5%;
   }

   body {
    background: ${(props) => props.theme.body}; 
    color: ${(props) => props.theme.font}; 
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
  }

  .container{
    margin: 0 auto;
    max-width: 1200px;
    padding: 32px 0;
  }

  svg{
    fill: ${(props) => props.theme.iconColor};

    &.pressure{
    fill: none;
    stroke: ${(props) => props.theme.iconColor};
    }
  }
`;
