import { createGlobalStyle } from "styled-components";
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const bgColor1 = red[200];
const bgColor2 = pink[300];

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
  	body {
    	font-family: 'Roboto', sans-serif;
    	/* background: linear-gradient(#ECB0D9, #E6BAE7); */
		background: linear-gradient(${bgColor1}, ${bgColor2});
		min-width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: center;
		margin: 0;
		color: #888;
	}
`

export default GlobalStyle;