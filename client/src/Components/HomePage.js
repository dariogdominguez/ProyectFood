import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerRecetas} from "../actions";
import { Container,ContainerOne, ContainerThree, ContainerTwo} from "../Styles/Body";
import Card from './Card';
import Nav from "../Components/Nav";
import PageButton from "./PageButton";
import Filters from './Filters';


export default function Home(){
    const [page, setPage] = useState (1)

    const dispatch = useDispatch();
    const todasLasRecetas = useSelector ((state) => state.recetas);

    let copiaRecetas = todasLasRecetas.slice();
    
    useEffect(()=>{
        dispatch(traerRecetas())
    },[dispatch]);

    function onClick(page){
        setPage(page)
      }
      console.log(page);
      let botones = Math.ceil(todasLasRecetas.length/9);
      let bot = [];
      const  recetasPaginadas = [];
      
      while(copiaRecetas.length >0) {      
        recetasPaginadas.push(copiaRecetas.splice(0, 9))      
      };


return(
<Container >
<ContainerOne >
<Nav />
{<Filters ></Filters>}
<ContainerTwo >
{(() => {for(let i=1; i<=botones;i++){
bot.push(<PageButton key={1+Math.random(0,9)} onClick={onClick} pag={i}></PageButton>)}
return bot})()
}
</ContainerTwo>
</ContainerOne >
<ContainerThree>
{recetasPaginadas[page-1]?.map((element)=>(

<>
<Card key={1+Math.random(0,9)} score={element.nivel} title={element.nombre} diets={element.diets} dietas={element.dietas} imgUrl={element.image +"?api_key=4240cbd0-42d7-438f-aa4d-0d1432907ea0"}></Card>
</>
))}
</ContainerThree>
</Container>
)
}