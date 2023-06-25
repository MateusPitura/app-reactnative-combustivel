import React, { useState, useRef} from "react";
import { View, StatusBar, TouchableWithoutFeedback, Text, ScrollView, SafeAreaView } from "react-native";

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
                <View style={Style.criarCarro}>
                    <Text style={Typography.header}>
                        Criar um novo{'\n'}
                    </Text>
                    <Text style={Typography.regular}>
                        Nome do carro
                    </Text>
                    <Input
                        placeholder="Prisma Joy 2008"
                        setState={setNomeCarro}
                        returnKeyType="next"
                        next={inputConsumoEtanol}
                    />
                    <Text style={Typography.regular}>
                        Consumo de etanol
                    </Text>
                    <Input
                        placeholder="7 km/l"
                        setState={setConsumoEtanol}
                        returnKeyType="next"
                        identifier={inputConsumoEtanol}
                        next={inputConsumoGasolina}
                    />
                    <Text style={Typography.regular}>
                        Consumo de gasolina
                    </Text>
                    <Input
                        placeholder="10 km/l"
                        setState={setConsumoGasolina}
                        returnKeyType="done"
                        identifier={inputConsumoGasolina}
                    />
                    <Button
                        title={"Adicionar um novo carro"}
                        onPress={()=>{}}
                    />
                </View>
                <View  style={Style.pesquisarCarro}>
                    <Text style={Typography.header}>
                        Pesquisar{'\n'}
                    </Text>
                    <Text style={Typography.regular}>
                        Marca
                    </Text>
                    <Input
                        placeholder="Toyota"
                        //setState={setNomeCarro}
                        returnKeyType="next"
                        next={inputModelo}
                    />
                    <Text style={Typography.regular}>
                        Modelo
                    </Text>
                    <Input
                        placeholder="Corolla"
                        //setState={setConsumoEtanol}
                        returnKeyType="next"
                        identifier={inputModelo}
                        next={inputAno}
                    />
                    <Text style={Typography.regular}>
                        Ano
                    </Text>
                    <Input
                        placeholder="2008"
                        //setState={setConsumoGasolina}
                        returnKeyType="done"
                        identifier={inputAno}
                    />
                    <Button
                        title={"Adicionar"}
                        onPress={()=>{}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}