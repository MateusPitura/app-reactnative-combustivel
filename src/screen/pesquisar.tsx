import React, { useState, useRef} from "react";
import { 
    View,
    Text, 
    ToastAndroid,
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

    const [marca, setMarca] = useState("");
    const [dataMarca, setDataMarca] = useState([])
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");
    const [dataIsValid, setDataIsValid] = useState(true);

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

    const checkInput = (regex: any, data: any, setDataIsValid: any) => {
        for(var i=0; i<data.length; i++){
            if(RegExp(regex).test(data[i])==false){
                setDataIsValid(false);
                return false;
            }
        }
        setDataIsValid(true);
        return true;
    }

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
    //     } catch(error){
    //         console.log(error);
    //     }
    // }

    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset('Carro adicionado', ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50);
    };

    const handleBtnPesquisar = () => {
        if(checkInput(
            ".",
            [marca, modelo, ano],
            setDataIsValid
        )){
            //createCar();
            showToast();
            navigation.goBack();
        }
    }

    return(
        <View style={Style.pesquisar}>
            <Text style={Typography.header}>
                Pesquisar{'\n'}
            </Text>
            <Text style={Typography.regular}>
                Marca
            </Text>
            <DropDown
                url="https://parallelum.com.br/fipe/api/v1/carros/marcas"
                dataIsValid={dataIsValid}
                // list={listaMontadora}
                // list={dataMarca}
                setState={setMarca}
                placeholder="Chevrolet"
            />
            <Text style={Typography.regular}>
                Modelo
            </Text>
            <DropDown 
                dataIsValid={dataIsValid}
                list={listaModelo}
                setState={setModelo}
                placeholder="Prisma"
            />
            <Text style={Typography.regular}>
                Ano
            </Text>
            <DropDown 
                dataIsValid={dataIsValid}
                list={listaAno}
                setState={setAno}   
                placeholder="2008"        
            />
            <Button
                title={"Pesquisar"}
                onPress={()=>{
                    // console.log(marca)
                    // console.log(modelo)
                    // console.log(ano)
                    fetchMontadora()
                    handleBtnPesquisar()
                }}
            />
        </View>
    );
}