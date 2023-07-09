import React, { useState, useRef} from "react";
import { 
    View, 
    StatusBar, 
    TouchableWithoutFeedback, 
    Text, 
    ScrollView, 
    SafeAreaView, 
    Alert 
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import Uuid from 'react-native-uuid';

//Import Style
import Style from "../style/screen-adicionar";
import Typography from "../style/typography";
import Color from "../style/color";

//Import Asset
import Arrow from "../asset/icon/arrow.svg";

//Import Componet
import Input from "../component/input";
import Button from "../component/button";

export default function({navigation}: any){

    const [nomeCarro, setNomeCarro] = useState("");
    const [consumoEtanol, setConsumoEtanol] = useState("");
    const [consumoGasolina, setConsumoGasolina] = useState("");

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");

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

    const inputModelo = useRef(null);
    const inputAno = useRef(null);

    return(
        <SafeAreaView style={Style.layout}>
            <StatusBar
                backgroundColor={Color.branco}
                barStyle={"dark-content"}
            />
            <View style={Style.header}>
                <TouchableWithoutFeedback
                    onPress={()=>navigation.goBack()}
                >
                    <Arrow height={50} width={50} fill={Color.vermelho}/>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView 
                style={Style.container}
                keyboardShouldPersistTaps='handled'
            >
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
                <View  style={Style.pesquisar}>
                    <Text style={Typography.header}>
                        Pesquisar{'\n'}
                    </Text>
                    <Text style={Typography.regular}>
                        Marca
                    </Text>
                    <Input
                        placeholder="Chevrolet"
                        inputMode="text"
                        maxLength={255}
                        setState={setMarca}
                        returnKeyType="next"
                        next={inputModelo}
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
            </ScrollView>
        </SafeAreaView>
    );
}