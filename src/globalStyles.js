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
    background-repeat: no-repeat;
  }

  p,h1,h2,div,li,ul{
    margin:0;
    padding: 0;
    list-style: none;
  }

  .container{
    margin: 0 auto;
    max-width: 1200px;
    padding: 32px 0;

    @media(min-width: 1500px){
    margin: 32px auto 28px;
    }

    @media (max-width: 767px) {
    padding: 32px;
    margin: 0 auto;
  }
  }

  svg{
    fill: ${(props) => props.theme.iconColor};

    &.icon{
      &-pressure{
      fill: none;
      stroke: ${(props) => props.theme.iconColor};
    }
    }
   
    >path{
      &.icon-border{
        fill: ${(props) => props.theme.border};
    }
    }
  }
`;
