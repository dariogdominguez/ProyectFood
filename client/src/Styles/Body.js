import styled from "styled-components";

export const Container = styled.div`
height: 85vh;
width: 85vw;
background-image: url('https://www.wallpaperup.com/uploads/wallpapers/2020/06/04/1377051/7617eb34ba8c8a0f8eb8e31c7c21078c-700.jpg');
background-repeat: no-repeat;
background-size: cover;
border: solid;
border-color: black;
border-radius: 20px;
`;

export const ContainerOne = styled.div`
grid-area: 1 / 1 / 2 / 6;`
export const ContainerThree = styled.div`
grid-area: 2 / 2 / 5 / 5;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
`

export const ContainerTwo = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export const StyButton = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "black"};

cursor: pointer;
font-size: 1em;
margin: 0.5em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
text-decoration: none;
:hover {
    background-color: #707070;
    color: black;
}
@media (max-width: 850px){
    display: none;
}
`
export const LandigPageDiv = styled.div`
  background-image: url('https://img.freepik.com/vector-gratis/grupo-cocineros-profesionales-chefs-hombre-mujer_36082-488.jpg?w=2000');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  height: 100vh;
  width: 100vw;
  align-self: center;
  display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
  `

  export const LandigPageTittle = styled.div`
  grid-area: 1 / 1 / 3 / 2;
text-align:center;
color: black;
font-size: larger;
`

export const GoButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  :hover{
    background-color: #707070;
    color: black;
  }
`