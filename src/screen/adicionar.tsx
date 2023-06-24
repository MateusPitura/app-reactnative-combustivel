import React from "react";
import { View, StatusBar, TouchableWithoutFeedback, Text } from "react-native";

import Style from "../style/screen-adicionar";
import Arrow from "../asset/icon/arrow.svg";
import Color from "../style/color";

export default function({navigation}: any){
    return(
        <View style={Style.layout}>
            <StatusBar
                backgroundColor={Color.branco}
            />
            <View style={Style.header}>
                <TouchableWithoutFeedback
                    onPress={()=>navigation.goBack()}
                >
                    <Arrow height={50} width={50} fill={Color.vermelho}/>
                </TouchableWithoutFeedback>
            </View>
            <View style={Style.container}>
                <Text>Hello</Text>
            </View>
        </View>
    );
}