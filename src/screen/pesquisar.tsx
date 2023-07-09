import React, { useState, useRef} from "react";
import { 
    View,
    Text, 
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import Uuid from 'react-native-uuid';

//Import Style
import Style from "../style/screen-pesquisar";
import Typography from "../style/typography";

//Import Component
import Input from "../component/input";
import Button from "../component/button";
import DropDown from "../component/drop-down";

export default function({navigation}: any){

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");

    const [dataIsValid, setDataIsValid] = useState(true);

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

    const checkInputIsEmpty = (data: any, setDataIsValid: any) => {
        for(var i=0; i<data.length; i++){
            if(data[i]==""){
                setDataIsValid(false);
                return false;
            }
        }
        setDataIsValid(true);
        return true;
    }

    const checkInputIsValid = (data: any, setDataIsValid: any) => {
        const regex = RegExp("^(?!0$)(^([0-9]{1,2})([\,][0-9]{1,2})?$)") //Rejeita apenas 0. Aceita 1 ou 2 números inteiros e, opcionalmente, seguido de ponto ou vírgula e 1 ou 2 números
        for(var i=0; i<data.length; i++){
            if(regex.test(data[i])==false){
                setDataIsValid(false);
                return false;
            }
        }
        setDataIsValid(true);
        return true;
    }

    const inputModelo = useRef(null);
    const inputAno = useRef(null);

    return(
        <View style={Style.pesquisar}>
            <Text style={Typography.header}>
                Pesquisar{'\n'}
            </Text>
            <Text style={Typography.regular}>
                Marca
            </Text>
            <DropDown

            />
            <Text style={Typography.regular}>
                Modelo
            </Text>
            <Input
                placeholder="Prisma"
                inputMode="text"
                maxLength={255}
                setState={setModelo}
                returnKeyType="next"
                identifier={inputModelo}
                next={inputAno}
            />
            <Text style={Typography.regular}>
                Ano
            </Text>
            <Input
                placeholder="2008"
                inputMode="numeric"
                maxLength={4}
                setState={setAno}
                returnKeyType="search"
                identifier={inputAno}
            />
            <Button
                title={"Pesquisar"}
                onPress={()=>{}}
            />
        </View>
    );
}