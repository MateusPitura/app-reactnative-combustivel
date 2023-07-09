import React, { useState, useRef} from "react";
import { 
    View, 
    Text,
    Alert 
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
                parseFloat(consumoEtanol.replace(',','.'))
                /
                parseFloat(consumoGasolina.replace(',','.'))
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
            Alert.alert("Carro inserido");
        } catch(error){
            console.log(error);
        }
    }

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

    const handleBtnCriar = () => {
        if(checkInputIsEmpty([nomeCarro], setDataIsValid) && checkInputIsValid([consumoEtanol, consumoGasolina], setDataIsValid)){
            createCar();
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