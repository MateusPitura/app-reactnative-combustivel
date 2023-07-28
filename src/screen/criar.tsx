import React, { useState, useRef} from "react";
import { 
    View, 
    Text,
    ToastAndroid,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import Uuid from 'react-native-uuid';

//Import Style
import Style from "../style/screen-criar";
import Typography from "../style/typography";

//Import Component
import Input from "../component/input";
import Button from "../component/button";

export default function({navigation}: any){

    const [nomeCarro, setNomeCarro] = useState("");
    const [consumoEtanol, setConsumoEtanol] = useState("");
    const [consumoGasolina, setConsumoGasolina] = useState("");

    const [dataIsValid, setDataIsValid] = useState(true);

    const createCar = async () => {
        try{
            const id = Uuid.v4();
            const rendimento = ((
                parseFloat(consumoEtanol?consumoEtanol.replace(',','.'):"0")
                /
                parseFloat(consumoGasolina?consumoGasolina.replace(',','.'):"0")
            )*100).toFixed(2)

            const newData = [{
                id,
                nomeCarro,
                consumoEtanol,
                consumoGasolina,
                rendimento,
            }]
    
            const response = await AsyncStorage.getItem("@meucarroflex:carro");
            const previousData = response? JSON.parse(response) : [];
            const data = [...previousData, ...newData]
            AsyncStorage.setItem("@meucarroflex:carro", JSON.stringify(data));
        } catch(error){
            console.log(error);
        }
    }

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

    const showToast = () => {
        ToastAndroid.showWithGravityAndOffset('Carro adicionado', ToastAndroid.SHORT, ToastAndroid.TOP, 0, 50);
    };

    const handleBtnCriar = () => {
        if(checkInput(
            ".",
            [nomeCarro], 
            setDataIsValid
        ) && checkInput(
            "^(?!(^([0])([\,][0]{1,2})?$)$)(^([0-9])([\,][0-9]{1,2})?$)", //Rejeita apenas 0. Aceita 1 ou 2 números inteiros e, opcionalmente, seguido de ponto ou vírgula e 1 ou 2 números
            [consumoEtanol, consumoGasolina], 
            setDataIsValid
        )){
            createCar();
            showToast();
            navigation.goBack();
        }
    }

    const inputConsumoEtanol = useRef(null);
    const inputConsumoGasolina = useRef(null);

    return(
        <View style={Style.criar}>
            <Text style={Typography.header}>
                Criar{'\n'}
            </Text>
            <Text style={Typography.regular}>
                Nome do carro
            </Text>
            <Input
                dataIsValid={dataIsValid}
                placeholder="Prisma Joy 1.4"
                inputMode="text"
                maxLength={255}
                setState={setNomeCarro}
                returnKeyType="next"
                next={inputConsumoEtanol}
            />
            <Text style={Typography.regular}>
                Consumo de etanol em km/l
            </Text>
            <Input
                dataIsValid={dataIsValid}
                placeholder="7"
                inputMode="numeric"
                maxLength={5}
                setState={setConsumoEtanol}
                returnKeyType="next"
                identifier={inputConsumoEtanol}
                next={inputConsumoGasolina}
            />
            <Text style={Typography.regular}>
                Consumo de gasolina em km/l
            </Text>
            <Input
                dataIsValid={dataIsValid}
                placeholder="10,40"
                inputMode="numeric"
                maxLength={5}
                setState={setConsumoGasolina}
                returnKeyType="done"
                identifier={inputConsumoGasolina}
                action={handleBtnCriar}
            />
            <Button
                title={"Criar"}
                onPress={handleBtnCriar}
            />
        </View>
    );
}