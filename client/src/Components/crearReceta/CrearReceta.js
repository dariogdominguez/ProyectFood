import React, { createRef } from "react";
import Nav from "../Nav";
import { useState } from "react";
import { MainContainer, FormContainer, TitleContainer,
        StyledLabel, StyledInputTwo, StyledButton, StyledP, StyledTextArea} from "../../Styles/CreateDogStyles/CreateDogStyles";
import {validate} from './Validaciones';
import {crearReceta} from '../../actions'


export default function NuevaReceta (){
    const [nombre, setNombre] = useState("")
    const [resumen, setResumen] = useState("");
    const [puntuacion, setPuntuacion] = useState("");
    const [nivel, setNivel] = useState("");
    const [pasoAPaso, setPasoAPaso] = useState("");
    const [tipoDeDieta, setTipoDeDieta] = useState([]);
    

    const errorMessage = validate(nombre, resumen, puntuacion, nivel, tipoDeDieta, pasoAPaso)

    return(
        <div>
            <Nav />
            <MainContainer>
            <TitleContainer >
            <h1>Crea tu propia receta!</h1>
            <p></p>
            </TitleContainer>
            <FormContainer >
                <form onSubmit={e => {
                e.preventDefault()
                validate(nombre, resumen, puntuacion, nivel, tipoDeDieta, pasoAPaso);
                let nuevaReceta ={
                    title: nombre,
                    summary: resumen,
                    spoonacularScore: puntuacion,
                    healthScore: nivel,
                    diets: tipoDeDieta,
                    steps: pasoAPaso,
                }
                if(tipoDeDieta.length>=1)crearReceta(nuevaReceta)
                }}>
                    <tr>
                    <td><StyledLabel >Nombre:</StyledLabel></td>
                    <td><StyledInputTwo 
                    type = "text"
                    placeholder="Nombre de la receta"
                    autoComplete = "off"
                    value = {nombre}
                    onChange ={ e => setNombre(e.target.value)
                    }></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Puntuacion: </StyledLabel></td>
                    <td><StyledInputTwo 
                    type = "text"
                    placeholder="Puntuacion"
                    autoComplete = "off"
                    value = {puntuacion}
                    onChange ={ e => setPuntuacion(e.target.value)}
                    ></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >Nivel: </StyledLabel></td>
                    <td><StyledInputTwo                      
                    type = "text"
                    placeholder="Nivel de saludable"
                    autoComplete = "off"
                    value = {nivel}
                    onChange ={ e => setNivel(e.target.value)}></StyledInputTwo></td>
                    </tr>
                    <StyledLabel >Resumen: </StyledLabel>
                    <br/>
                    <StyledTextArea
                    rows="4" cols="50"
                    placeholder="Resumen de la receta"
                    value = {resumen}
                    onChange ={ e => setResumen(e.target.value)}></StyledTextArea>
                    <br/>
                    <StyledLabel >Paso a paso: </StyledLabel>
                    <br/>
                    <StyledTextArea
                    rows="4" cols="50"
                    placeholder="Paso a paso de la receta"
                    value = {pasoAPaso}
                    onChange ={ e => setPasoAPaso(e.target.value)}></StyledTextArea>
                    <br/>
                    <StyledLabel >Tipos de receta </StyledLabel><br/>
                    <tr>
                    <td><StyledLabel >gluten free</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"gluten free"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >dairy free</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"dairy free"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >vegan</StyledLabel></td>
                    <td><StyledInputTwo type={"checkbox"} value={"vegan"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >fodmap friendly</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"fodmap friendly"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    </tr>
                    <tr>
                    <td><StyledLabel >ketogenic</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"ketogenic"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >paleolithic</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"paleolithic"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >primal</StyledLabel></td>
                    <td><StyledInputTwo type={"checkbox"} value={"primal"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    <td><StyledLabel >pescatarian</StyledLabel></td>
                    <td><StyledInputTwo  type={"checkbox"} value={"pescatarian"} onChange={e => setTipoDeDieta(tipoDeDieta =>[...tipoDeDieta, e.target.value])}></StyledInputTwo></td>
                    </tr>
                <StyledP >{errorMessage}</StyledP>
                <StyledButton  type="submit" disabled={errorMessage}>Enviar</StyledButton>
                </form>
            </FormContainer>
            </MainContainer>
        </div>
    )

}