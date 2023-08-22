import React, { useState, useRef} from "react";
import { 
    View,
    Text, 
    ToastAndroid,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import Uuid from 'react-native-uuid';

//Import Style
import { typography } from "../style/typography";

//Import Component
import Button from "../component/button";
import DropDown from "../component/drop-down";

export default function(props: any){

    const [nome, setNome] = useState("");
    const [marcaId, setMarcaId] = useState("");
    const [modeloId, setModeloId] = useState("");
    const [anoId, setAnoId] = useState("");
    const [dataIsValid, setDataIsValid] = useState(true);

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

    const createCar = async () => {
        try{
            const newData = [{
                id: Uuid.v4(),
                nomeCarro: nome.toString(),
                consumoEtanol: "07,00",
                consumoGasolina: "10,40",
                rendimento: "67.31",
                active: false,
            }]
    
            const response = await AsyncStorage.getItem("@meucarroflex:carro");
            const previousData = response? JSON.parse(response) : [];
            const data = [...previousData, ...newData]
            await AsyncStorage.setItem("@meucarroflex:carro", JSON.stringify(data));
        } catch(error){
            console.log(error);
        }
    }

    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset('Carro adicionado', ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50);
    };

    const handleBtnPesquisar = () => {
        if(checkInput(
            ".",
            [marcaId, modeloId, anoId],
            setDataIsValid
        )){
            createCar();
            showToast();
            props.navigation.goBack();
        }
    }

    const Typography = typography("light")

    return(
        <View style={props.style}>
            {/* {Style.pesquisar}> */}
            <Text style={Typography.header}>
                Pesquisar{'\n'}
            </Text>
            <Text style={Typography.regular}>
                Marca
            </Text>
            <DropDown
                url="https://parallelum.com.br/fipe/api/v1/carros/marcas"
                dataIsValid={dataIsValid}
                setState={setMarcaId}
                placeholder="Chevrolet"
            />
            <Text style={Typography.regular}>
                Modelo
            </Text>
            <DropDown
                url={"https://parallelum.com.br/fipe/api/v1/carros/marcas/"+marcaId+"/modelos"}
                setSelected={setNome}
                dataIsValid={dataIsValid}
                setState={setModeloId}
                placeholder="Prisma"
            />
            <Text style={Typography.regular}>
                Ano
            </Text>
            <DropDown
                url={"https://parallelum.com.br/fipe/api/v1/carros/marcas/"+marcaId+"/modelos/"+modeloId+"/anos"} 
                dataIsValid={dataIsValid}
                setState={setAnoId}   
                placeholder="2008"        
            />
            <Button
                title={"Pesquisar"}
                onPress={()=>{
                    handleBtnPesquisar()
                }}
            />
        </View>
    );
}