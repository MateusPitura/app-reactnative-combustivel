import React from "react";
import { View, TouchableHighlight } from "react-native";

import { estilo } from "../style/component-drawer-button"
import Color from "../style/color";
import Add from '../asset/icon/add.svg';

export default function(props: any){

    const Style = estilo("light");

    return(
        <TouchableHighlight
            style={Style.touchable}
            onPress={props.onPress}
            underlayColor={Color["light"].vermelhoEscuro}
        >
            <View style={Style.icon}>
                <Add fill={Color["light"].branco1} height={"100%"} width={"100%"}/>
            </View>
        </TouchableHighlight>
    );
}