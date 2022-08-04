import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px;
  grid-template-rows: 210px 160px 90px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background-image: url("https://img.freepik.com/foto-gratis/piso-madera-blanca-textura-fondo_24076-493.jpg?w=2000");
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  background-size: cover;
  text-align: center;
  width: fit-content;
  margin-left: 50px;
  margin-top: 30px;
  
  :hover {
  transform: scale(1.1); 
}
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${props => props.src };);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  display: flex;
`;
export const Score = styled.div`
  background-color: rgb(255, 187, 153, 0.7);
  border-radius: 15px;
  border: 2px bold;
  height: 80px;
  width: 70px;
  padding: 5px;
  overflow: hidden;
`;


export const CardTextWrapper = styled.div`

`;
export const H4 = styled.h3 `
margin: 0px;
`;

export const CardTextTitle = styled.h3`
  margin-top: 0px;
  font-size: 1.5rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1;
  padding: 0%;
  margin: 0px;
  color: black;
`;

export const CardTextBody = styled.p`
  color: black;
  font-size: 15px;
  text-decoration: solid;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
`;



export const CardStatWrapper = styled.div`
  grid-template-columns: repeat(2, 1fr);
  color: black;
  padding: 10px;
  overflow: hidden;
  font-size: 15px;
  text-decoration: solid;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin: 0;
`;

export const StyledList = styled.ul`
  color: black;
  text-shadow: 1px;
  font-size: medium;
  text-decoration: solid;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  list-style-type: none;
  margin: 10px;
  padding: 5px;
`;