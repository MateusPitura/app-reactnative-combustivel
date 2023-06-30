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
    const [consumoEtanol, setConsumoEtanol] = useState(0);
    const [consumoGasolina, setConsumoGasolina] = useState(0);

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState("");

    const createCar = async () => {
        try{
            const id = Uuid.v4();
            const rendimento = ((consumoEtanol/consumoGasolina)*100).toFixed(2);

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

    const handleBtnCriar = () => {
        createCar();
        navigation.goBack();
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
            <ScrollView style={Style.container}>
                <View style={Style.criar}>
                    <Text style={Typography.header}>
                        Criar{'\n'}
                    </Text>
                    <Text style={Typography.regular}>
                        Nome do carro
                    </Text>
                    <Input
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
                        placeholder="10,40"
                        inputMode="numeric"
                        maxLength={5}
                        setState={setConsumoGasolina}
                        returnKeyType="done"
                        identifier={inputConsumoGasolina}
                        action={()=>{handleBtnCriar()}}
                    />
                    <Button
                        title={"Criar"}
                        onPress={()=>{handleBtnCriar()}}
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