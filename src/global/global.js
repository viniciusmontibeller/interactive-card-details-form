import backgroundDesktop from '../assets/bg-main-desktop.png'
import backgroundMobile from '../assets/bg-main-mobile.png'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    min-height: 100vh;
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;
    background-image: url(${backgroundDesktop});
    background-repeat: no-repeat;
    background-size: contain;
    @media(max-width: 1150px){
      background-image: url(${backgroundMobile});
      background-repeat: no-repeat;
      background-size: 100% 38%;
    }
  }

  #root{
  min-height: 100vh;
  display: grid;
  place-content: center;
}
`

export { GlobalStyle }