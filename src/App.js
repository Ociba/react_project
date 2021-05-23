import logo from './logo.svg';
import './App.css';
import './header.css';
import Menu from './component/Menu'
import styled from 'styled-components';
import backgroundIm from './asset/download.jpeg'
// Any word before equal sign is variable to be called in the function
const TopContainer = styled.div`
background-image : url(${backgroundIm});
height: 100vh;
width:100%;
padding:0;
background-size:cover;
object-fit: cover;
opacity: 0.4;
`
const IconImage =styled.div`
text-align: center;
display: block;
align-items: center;
margin: auto;
width: 20%;
`
const Button =styled.div`
background: blue;
color: white;
font-size: 20px;
border-radius: 5px;
border: none;
padding:10px;
margin: auto;
cursor: pointer;
justify-content: center;
align-items: center;
width:20%;
text-align:center;
`
const TextSection =styled.div`
text-align: center;
align-items: center;
margin: auto;
font-size:30px;
color:#fff;
font-weight:bold;
`
function App() {
return (
<TopContainer>
    {/*Void*/}
    <Menu />
    <IconImage>
        <img src={logo}/>
    </IconImage>
    <TextSection>Learning React is Very Interesting</TextSection>
    <Button>Get Started</Button>
</TopContainer>
);
}
export default App;