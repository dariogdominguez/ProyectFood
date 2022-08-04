export function allLetter(inputtxt)
{
var letters = /^[A-Za-z]+$/;
if(inputtxt.match(letters))
{
return true;
}
else{
return false;
}}

export function allnumeric(inputtxt)
{
var numbers = /^[0-9]+$/;
if(inputtxt.match(numbers))
{
return true;
}
else{
return false;
}}




export const validate = (nombre, resumen, puntuacion, nivel, tipoDeDieta, pasoAPaso) =>{

    if(nombre)if(!allLetter(nombre)){
        return "El nombre solo acepta letras"
    }
    if(puntuacion)if(!allnumeric(puntuacion) || puntuacion < 1 || puntuacion > 99){
        return "Puntuacion solo acepta numeros entre 1 y 99"
    }
    if(nivel)if(!allnumeric(nivel) || puntuacion < 1 || puntuacion > 99){
        return "Nivel de saludable solo acepta numeros entre 1 y 99"
    }
    if(resumen)if(resumen.length < 1){
        return "Debe ingresar resumen"
    }
    if(pasoAPaso)if(pasoAPaso.length < 1){
        return "Debe ingresar paso a paso"
    }
    if(tipoDeDieta)if(tipoDeDieta.length < 1){
        return "Debe seleccionar al menos un tipo de dieta"
    }
    if(nombre && resumen && puntuacion && nivel && tipoDeDieta && pasoAPaso){
    }else{
        return ("Faltan campos por completar")
    }
}