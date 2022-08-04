import React from "react";
import { NavbarContainer, LeftContainer,
        RightContainer, NavbarInnerContainer,
        LinksContainer, StyNavLink,SttyH4} from "../Styles/Navbar.Styles";
import { useState } from "react";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper} from "../Styles/styledCheckbox";
import { useDispatch } from "react-redux";
import { sortByAlphabet} from "../actions";
import { Separator } from "../Styles/Body";


function Nav() {        
        const [sort, setSort] = useState (true)
        const dispatch = useDispatch();
return (
        <NavbarContainer >
                <NavbarInnerContainer >
                <LeftContainer >
                        <LinksContainer >
                                <StyNavLink  to="/Home">Home</StyNavLink>
                                <StyNavLink  to="/CrearReceta">Crear una receta</StyNavLink>
                                <StyNavLink  to="/DogsDetails">Detalles de la receta</StyNavLink>
                        </LinksContainer>
                </LeftContainer> 
                <RightContainer >
                        <SttyH4 >A-Z</SttyH4>
                        <Separator ></Separator>
                        <CheckBoxWrapper >
                        <form onChange={(e) =>{
                        e.preventDefault();
                        dispatch(sortByAlphabet(sort))
                        setSort(!sort)
                        }}>
                        <CheckBox  id="checkbox" type="checkbox"/>
                        <CheckBoxLabel  htmlFor="checkbox" />
                        </form>
                        </CheckBoxWrapper>
                </RightContainer>
                </NavbarInnerContainer>
        </NavbarContainer>

);
}

export default Nav;
