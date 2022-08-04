import React from "react";
import { Input} from "../Styles/Navbar.Styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onSearch } from "../actions";




export default function SearchBar (){
    const allDogs = useSelector ((state) => state.dogs);
    const dispatch = useDispatch();

    const [dog, sertDog] = useState("")
    
    return(
        <form onSubmit={(e) =>{
            e.preventDefault();
            dispatch(onSearch(dog));
            sertDog("")
        }}>
            <Input 
            placeholder="Bucar Raza..."
            value={dog}
            onChange={e =>sertDog(e.target.value)}
            ></Input>
            <Input  type={'submit'} value={'Buscar'}></Input>
        </form>
    )
}