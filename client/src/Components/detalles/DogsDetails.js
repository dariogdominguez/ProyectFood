import React from "react";
import Nav from '../Nav';
import { StyledMainContainer, StryledBodyContainer, StryledTittleContainer, DivOne, DivTwo, DogImage } from "./DogsDetailsStyles";
import { Input} from "../../Styles/Navbar.Styles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { onSearch } from "../../actions";
import { useDispatch } from "react-redux";


export default function DogsDetails (){
    const DogsDetails = useSelector ((state) => state.dogs);
    const [dog, sertDog] = useState("")
    const dispatch = useDispatch();
    return(
        <div>
        <Nav/>
        <StyledMainContainer >
            <StryledTittleContainer >
            <h1>Dogs Ditails</h1>
            <div>
        <form onSubmit={(e) =>{
            e.preventDefault();
            dispatch(onSearch(dog));
            sertDog("")
            alert(dog)
        }}>
            <Input 
            placeholder="Bucar por Raza..."
            value={dog}
            onChange={e =>sertDog(e.target.value)}
            ></Input>
            <Input  type={'submit'} value={'Buscar'}></Input>
        </form>
        </div>
            </StryledTittleContainer>
            <StryledBodyContainer>
                <DivOne >
                    <DogImage  src={DogsDetails[0]?DogsDetails[0].image+"?api_key=4240cbd0-42d7-438f-aa4d-0d1432907ea0":"./descarga.jpg"}></DogImage>
                </DivOne>
                <DivTwo >
                <h1>{DogsDetails[0]?DogsDetails[0].name:"wait"}</h1>
                    <p>Altura: {DogsDetails[0]?DogsDetails[0].height:"wait"}</p>
                    <p>Peso: {DogsDetails[0]?DogsDetails[0].weight:"wait"}</p>
                    <p>Años de vida: {DogsDetails[0]?DogsDetails[0].lifeSpan:"wait"}</p>
                </DivTwo>
            </StryledBodyContainer>
        </StyledMainContainer>
        </div>
    )
}