import React from "react";
import { StyledSelect } from "../Styles/StyledSelect";
export default function FilterInput(){
    return(
    <form action="/action_page.php">
    <StyledSelect key={Math.random(0,9)} id="cars" name="cars">

    <option key={Math.random(0,9)} value="temperaments">Temperaments</option>
    <option key={Math.random(0,9)} value="weight">Weight</option>

    </StyledSelect>
    </form>
    )
}