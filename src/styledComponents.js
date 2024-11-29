import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => (props.toggle ? 'black' : '#f5f5f5')};
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  overflow: auto;
`;

const Header = styled.div`
position:fixed;
top:0px;
width:100%;
height:60px;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
border-bottom:${(props)=>(props.toggle ? 'none' : 'solid 1px darkgrey')};
background-color:${(props)=>(props.toggle ? '#202020' : '#ffffff')}; 
overflow:auto;
`

const ChecklistSystem = styled.h1`
color:${(props)=>(props.toggle ? 'white' : 'black')};
font-size:20px;
margin:8px;
`
const ToggleButton = styled.button`
border:none;
background-color:transparent;
color:${(props)=>props.toggle ? 'white' : 'black'};
font-size:30px;
margin:8px;
cursor:pointer;
`

const DashboardHeading = styled.h1`
color:${(props) => props.toggle ? 'white' : 'black'};
margin:12px;

@media screen and (max-width:350px){
font-size:25px;
}
@media screen and (max-width:335px){
font-size:20px;
}

`

const ListContainer = styled.ul`
list-style-style:none;
display:flex;
flex-direction:column;
width:1000px;
background-color:${props => props.toggle ? "black" : "#f5f5f5"};
margin-top:12px;
overflow:auto;
@media screen and (max-width:1100px){
width:800px;
}

@media screen and (max-width:900px){
width:600px;
}

@media screen and (max-width:650px){
width:500px;
}
@media screen and (max-width:575px){
width:400px;
}
@media screen and (max-width:450px){
width:100%;
}

`
const ListItem = styled.li`
display:flex;
flex-direction:column;
font-size:20px;
border:solid 1px red;
margin:12px;
padding:12px;
border-radius:12px;
background-color:${props => props.toggle ? '#202020' : '#ffffff'};
border:solid 1px darkgrey;
overflow:auto;

@media screen and (max-width:450px){
font-size:18px;
}
@media screen and (max-width:335px){
font-size:15px;
}

`

const ChecklistRules = styled.p`
font-weight:bold;
color:${props => props.toggle ? 'white' : 'black'};
`
const Span = styled.span`
color:${props => props.toggle ? 'white' : 'black'};
font-weight:100;
`
const Condition = styled.p`
font-weight:bold;
color:${props => props.toggle ? 'white' : 'black'};
`

const ErrorMsg = styled.p`
color:red;
font-weight:bold;
text-align:center;
`


export {Container, Header, ChecklistSystem, ToggleButton, DashboardHeading,ListContainer, ListItem, ChecklistRules, Span, Condition, ErrorMsg} 