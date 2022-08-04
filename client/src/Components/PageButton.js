import React from "react";
import { Input} from "../Styles/Navbar.Styles";



export default function PageButton({onClick, pag}){
            return(
                <form >
                    <Input key={Math.random(0,9)}
                    type='button'
                    value={pag}
                    onClick={e => onClick(e.target.value)}
                    ></Input>
                </form>
            )
        };