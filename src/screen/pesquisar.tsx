import React, { useState, useRef} from "react";
import { 
    View,
    Text, 
    Alert,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import Uuid from 'react-native-uuid';

//Import Style
import Style from "../style/screen-pesquisar";
import Typography from "../style/typography";

//Import Component
import Button from "../component/button";
import DropDown from "../component/drop-down";

export default function({navigation}: any){

    const listaMontadora = [
        {field: "Chevrolet"},
        {field: "Volkswagem"},
        {field: "Ford"},
        {field: "BMW"},
        {field: "Audi"},
        {field: "Fiat"},
        {field: "Peogeot"},
        {field: "Honda"},
        {field: "Toyota"},
        {field: "Jeep"},
    ]

    const listaModelo = [
        {field: "Prisma"},
        {field: "Gol"},
        {field: "Fusion"},
        {field: "i3"},
        {field: "A3"},
        {field: "Toro"},
        {field: "208"},
        {field: "Civic"},
        {field: "Corolla"},
        {field: "Renegade"},
    ]

    const listaAno = [
        {field: "2001"},
        {field: "2002"},
        {field: "2003"},
        {field: "2004"},
        {field: "2005"},
        {field: "2006"},
        {field: "2007"},
        {field: "2008"},
        {field: "2009"},
        {field: "2010"},
    ]

    const [marca, setMarca] = useState("Chevrolet");
    const [modelo, setModelo] = useState("Prisma");
    const [ano, setAno] = useState("2008");

    // const createCar = async () => {
    //     try{
    //         const id = Uuid.v4();
    //         const rendimento = ((
    //             parseFloat(consumoEtanol.replace(',','.'))
    //             /
    //             parseFloat(consumoGasolina.replace(',','.'))
    //         )*100).toFixed(2)

    //         const newData = [{
    //             id,
    //             nomeCarro,
    //             consumoEtanol,
    //             consumoGasolina,
    //             rendimento,
    //         }]
    
    //         const response = await AsyncStorage.getItem("@meucarroflex:carro");
    //         const previousData = response? JSON.parse(response) : [];
    //         const data = [...previousData, ...newData]
    //         AsyncStorage.setItem("@meucarroflex:carro", JSON.stringify(data));
    //         Alert.alert("Carro inserido");
    //     } catch(error){
    //         console.log(error);
    //     }
    // }

    return(
        <View style={Style.pesquisar}>
            <Text style={Typography.header}>
                Pesquisar{'\n'}
            </Text>
            <Text style={Typography.regular}>
                Marca
            </Text>
            <DropDown 
                list={listaMontadora}
                state={marca}
                setState={setMarca}
            />
            <Text style={Typography.regular}>
                Modelo
            </Text>
            <DropDown 
                list={listaModelo}
                state={modelo}
                setState={setModelo}
            />
            <Text style={Typography.regular}>
                Ano
            </Text>
            <DropDown 
                list={listaAno}
                state={ano}
                setState={setAno}           
            />
            <Button
                title={"Pesquisar"}
                onPress={()=>{
                    console.log(marca)
                    console.log(modelo)
                    console.log(ano)
                }}
            />
        </View>
    );
}