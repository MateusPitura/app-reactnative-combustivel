import React, { useState } from "react";
import { 
    View, 
    StatusBar, 
    TouchableOpacity, 
    ScrollView, 
    SafeAreaView, 
} from "react-native";

//Import Style
import { estilo } from "../style/screen-adicionar";
import Color from "../style/color";

//Import Asset
import Arrow from "../asset/icon/arrow.svg";

//Import Screen
import Criar from "./criar";
import Pesquisar from "./pesquisar";

//Import Component
import ConsumeKeyboard from "../component/consume-keyboard";

export default function({navigation}: any){

    const [consumoEtanol, setConsumoEtanol] = useState("07,00");
    const [keyboardEtanol, setKeyboardEtanol] = useState(false);

    const [consumoGasolina, setConsumoGasolina] = useState("10,40");
    const [keyboardGasolina, setKeyboardGasolina] = useState(false);

    const Style = estilo("light")

    return(
        <SafeAreaView style={Style.layout}>
            <StatusBar
                backgroundColor={Color["light"].branco1}
                //barStyle={"dark-content"}
                barStyle={"light-content"} //Dark
            />
            <View style={Style.header}>
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                >
                    <Arrow height={50} width={50} fill={Color["light"].vermelho}/>
                </TouchableOpacity>
            </View>
            <ScrollView 
                style={Style.container}
                keyboardShouldPersistTaps='handled'
            >
                <View style={Style.border}>
                    <Criar 
                        navigation={navigation}
                        consumoEtanol={consumoEtanol}
                        setKeyboardEtanol={setKeyboardEtanol}
                        consumoGasolina={consumoGasolina}
                        setKeyboardGasolina={setKeyboardGasolina}
                    />
                    <Pesquisar 
                        navigation={navigation}
                        style={(keyboardEtanol == true || keyboardGasolina == true)?{paddingBottom: 300,}:{paddingBottom: 100,}}
                    />
                </View>
            </ScrollView>
            <ConsumeKeyboard
                visible={keyboardEtanol}
                setVisible={setKeyboardEtanol}
                value={consumoEtanol}
                setValue={setConsumoEtanol}
            />
            <ConsumeKeyboard
                visible={keyboardGasolina}
                setVisible={setKeyboardGasolina}
                value={consumoGasolina}
                setValue={setConsumoGasolina}
            />
        </SafeAreaView>
    );
}