import React from "react";
import { useState } from "react";

import { CardWrapper, CardImage, CardTextWrapper, 
        CardTextTitle, CardStatWrapper, CardTextBody, StyledList, Score, H4} from "../Styles/Cards.Styles";

export default function Card ({title, dietas, imgUrl, score, diets}) {
    if(!dietas){
        dietas = [];
        diets.map(e =>{
            dietas.push(e.nombre);
            console.log(e.nombre)
        })
    }
    return(
        <CardWrapper >
            <CardImage src={imgUrl}>
            </CardImage>
            <CardTextWrapper >
                <CardTextTitle>{title}</CardTextTitle>
            <StyledList  >
                <CardTextBody >Dietas:</CardTextBody>
            <CardStatWrapper >
                    {
                    dietas.map(e => 
                    
                    <li key={Math.random(0,9)} >{e}</li>)
                    }
            </CardStatWrapper>
            </StyledList>
            </CardTextWrapper>
            <Score>
            <img src="https://cdn-icons-png.flaticon.com/512/1142/1142131.png" alt=" " width="50" height="50"></img>
            <H4>{score}</H4>
            </Score>
        </CardWrapper>
    );
}