import axios from 'axios';




const url =`http://localhost:3001/recipes`;

function traerRecetas (){
    return async function(dispatch){
        var json = await axios(url);
            return dispatch({
                type: 'TRAER_RECETAS',
                payload: json.data
            })
    }
};

function tipoDeDieta(receta){
  if(receta === "Renovar"){
    return async function(dispatch){
          return dispatch({
              type: 'RENOVAR',
          })
        }
  }else{
    return async function(dispatch){
      return dispatch({
      type: 'FILTRO_POR_RECETA',
      payload: receta
      });
    }}};        

function onSearch(nombre){
  return async function(dispatch){
    await axios
    .get(`http://localhost:3001/recipes?name=${nombre}`)
    .then(e => {
      console.log(e.data)
      return dispatch({
        type: 'FILTRO_NOMBRE_RECETA',
        payload: e.data
        })
    })
}}

function crearReceta(nuevaReceta){
      axios.post("http://localhost:3001/recipe", nuevaReceta)
          .then(res => {
            alert(res.data);
          })
}


function sortByAlphabet(sort){
  if(sort){
  return async function(dispatch){
  return dispatch({
    type: 'ORDEN_ALFABETICO',
    payload: sort
  })
}}else{
  return async function(dispatch){
    return dispatch({
      type: 'ORDEN_ALFABETICO_Z_A',
      payload: sort
    })
  }

}
}


  function ordenarPorScore(value){
    console.log(value)
    if(value === "mayor"){
      return async function(dispatch){
        console.log("entro")
            return dispatch({
                type: 'MAYOR_A_MENOR',
            })
          }
    }else{
        return async function(dispatch){
          return dispatch({
            type: 'MENOR_A_MAYOR',
          })}
      }};  


export { traerRecetas, crearReceta, onSearch, tipoDeDieta, sortByAlphabet, ordenarPorScore};
