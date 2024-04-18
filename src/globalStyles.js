import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 html{
     font-size: 62.5%;
   }

   body {
    background: ${(props) => props.theme.body}; 
    margin: 0;
    padding: 0;
  }

  .container{
    margin: 0 auto;
    max-width: 1200px;
    padding: 64px 0;
  }
`;
