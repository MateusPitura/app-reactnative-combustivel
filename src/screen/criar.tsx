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
import ConsumeKeyboard from "../component/consume-keyboard";

export default function(props: any){

    const [nomeCarro, setNomeCarro] = useState("");
    const [dataIsValid, setDataIsValid] = useState(true);

    const createCar = async () => {
        try{
            const consumoEtanol = props.consumoEtanol;
            const consumoGasolina = props.consumoGasolina;

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
            "^(?!0$)(^([0-9]{1,2})([\,][0-9]{1,2})?$)", //Rejeita apenas 0. Aceita 1 ou 2 números inteiros e, opcionalmente, seguido de ponto ou vírgula e 1 ou 2 números
            [props.consumoEtanol, props.consumoGasolina], 
            setDataIsValid
        )){
            createCar();
            showToast();
            props.navigation.goBack();
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
                returnKeyType="done"
                //next={inputConsumoEtanol}
            />
            <Text style={Typography.regular}>
                Consumo de etanol em km/l
            </Text>
            <Input
                dataIsValid={dataIsValid}
                placeholder="07,00"
                value={props.consumoEtanol}
                inputMode="numeric"
                maxLength={5}
                setState={props.setConsumoEtanol}
                keyboard={props.setKeyboardEtanol}
                //returnKeyType="next"
                //identifier={inputConsumoEtanol}
                //next={inputConsumoGasolina}
            />
            <Text style={Typography.regular}>
                Consumo de gasolina em km/l
            </Text>
            <Input
                dataIsValid={dataIsValid}
                placeholder="10,40"
                value={props.consumoGasolina}
                inputMode="numeric"
                maxLength={5}
                setState={props.setConsumoGasolina}
                keyboard={props.setKeyboardGasolina}
                //returnKeyType="done"
                //identifier={inputConsumoGasolina}
                //action={handleBtnCriar}
            />
            <Button
                title={"Criar"}
                onPress={handleBtnCriar}
            />
        </View>
    );
}