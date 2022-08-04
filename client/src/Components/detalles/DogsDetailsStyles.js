import styled from "styled-components";

export const StyledMainContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

`

export const StryledTittleContainer = styled.div`
text-align: center;
align-items: center;
grid-area: 1 / 1 / 2 / 6;
`

export const StryledBodyContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

background-color: rgb(166, 166, 166, 0.3);
height: 93%;
width: 100%;
border-radius: 15px;
margin-left: 20px;
margin-top: 30px;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
grid-area: 2 / 2 / 6 / 5;
padding: 20px;
margin: 20px;
`
export const DivOne = styled.div`
grid-area: 1 / 2 / 4 / 3;
size-adjust: inherit;
overflow: hidden;
`
export const DivTwo = styled.div`
font-weight: bolder;
font-size: larger;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
padding: 15px;
grid-area: 1 / 1 / 6 / 2;`

export const DogImage =styled.img`
max-block-size: 350px;
border-radius: 15px;
`