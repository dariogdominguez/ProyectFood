import React from "react";
import { StyFilterDiv, InputImage, RadioInputWrapper } from "../Styles/FilterStyles";
import { Input} from "../Styles/Navbar.Styles";
import { useState } from "react";
import { tipoDeDieta } from "../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onSearch } from "../actions";
import {ordenarPorScore} from "../actions";



 export default function Filters(){
    useSelector ((state) => state.recetas);
    const [receta, setReceta] = useState("")


    const dispatch = useDispatch();


    return(
        <StyFilterDiv >
        <form onClick={(e) =>{
            e.preventDefault();
            dispatch(tipoDeDieta(e.target.value));
            }}>
            <InputImage value={"Renovar"} title={"Renovar"} type="image" src="https://cdn-icons.flaticon.com/png/512/4295/premium/4295989.png?token=exp=1653022587~hmac=b0f62f7465e3c5479fed735b4dad3368" />
            <InputImage value={"Gluten free"} title={"Gluten free"} type="image" src="https://cdn-icons.flaticon.com/png/512/2669/premium/2669150.png?token=exp=1652999405~hmac=5082877f1b9e94f1f155786f106a3634" />
            <InputImage value={"Dairy free"} title={"Dairy free"} type="image" src="https://cdn-icons.flaticon.com/png/512/3967/premium/3967329.png?token=exp=1653004622~hmac=aba72810ce1330c0369914610fb1cc38" />
            <InputImage value={"Lacto ovo vegetarian"}  title={"Lacto ovo vegetarian"} type="image" src="https://cdn-icons-png.flaticon.com/512/648/648486.png" />
            <InputImage value={"Paleolithic"}  title={"Paleolithic"} type="image" src="https://cdn-icons.flaticon.com/png/512/4703/premium/4703371.png?token=exp=1653005778~hmac=a5d185a9bdc6551c159c808059cddfc0" />
            <InputImage value={"Whole 30"}  title={"Whole 30"} type="image" src="https://play-lh.googleusercontent.com/Yj57poyIvXQ3qpdTLIcSKpATMPi5b_MTE0KXYudyV0NOBtAB-GSyKdpmdIck3jXPHlA" />
            <InputImage value={"Primal"}  title={"Primal"} type="image" src="https://cdn-icons.flaticon.com/png/512/4924/premium/4924726.png?token=exp=1653005778~hmac=9faa3a4d9d3ca0403972c3d19232ce53" />
            <InputImage value={"Pescatarian"}  title={"Pescatarian"} type="image" src="https://cdn-icons.flaticon.com/png/512/3967/premium/3967400.png?token=exp=1653005921~hmac=55418c68d8f6ff4fa38dd833cfc598a2" />
            <InputImage value={"Ketogenic"}  title={"Ketogenic"} type="image" src="https://cdn-icons-png.flaticon.com/512/2563/2563963.png" />
            <InputImage value={"Vegan"}  title={"Vegan"} type="image" src="https://cdn-icons.flaticon.com/png/512/3967/premium/3967297.png?token=exp=1653006194~hmac=9806a4beb7641f900991f0cbb7cc2a5b" />
            <InputImage value={"Fodmap friendly"} title={"Fodmap friendly"} type="image" src="https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/fodmap%20web_FD9456F0-5316-11E3-B6E2005056A302E6.jpg" />
        </form>
        <form onSubmit={(e) =>{
            e.preventDefault();
            dispatch(onSearch(receta));
            setReceta("")
        }}>
            <Input
            placeholder="Bucar por nombre..."
            value={receta}
            onChange={e =>setReceta(e.target.value)}
            ></Input>
            <Input type={'submit'} value={'Buscar'}></Input>
        </form>
        <RadioInputWrapper>
        <form onChange = {e =>{
            e.preventDefault();
            dispatch(ordenarPorScore(e.target.value))
        }
        }>
            <input type={'radio'} value={'mayor'} id="alumni" name="status"/>
        <label htmlFor="alumni">Mayor a menor</label>
        <input
        value="menor"
        type="radio"
        name="status"
        id="newcomer"
        />
        <label htmlFor="newcomer">Menor a mayor</label>
        </form>
        </RadioInputWrapper>
        </StyFilterDiv>
    )
};
