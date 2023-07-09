import React from "react";
import { 
    View, 
    StatusBar, 
    TouchableWithoutFeedback, 
    ScrollView, 
    SafeAreaView, 
} from "react-native";

//Import Style
import Style from "../style/screen-adicionar";
import Color from "../style/color";

//Import Asset
import Arrow from "../asset/icon/arrow.svg";

//Import Screen
import Criar from "./criar";
import Pesquisar from "./pesquisar";

export default function({navigation}: any){
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
                <Criar navigation={navigation}/>
                <Pesquisar navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    );
}