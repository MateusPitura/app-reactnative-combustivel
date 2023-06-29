import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import Style from "../style/component-drawer-button"
import Typography from "../style/typography";
import Color from "../style/color";
import Add from '../asset/icon/add.svg';

export default function(props: any){
    return(
        <TouchableHighlight
            style={Style.touchable}
            onPress={props.onPress}
            underlayColor={Color.vermelhoEscuro}
        >
            <View style={Style.container}>
                <View style={Style.icon}>
                    <Add fill={Color.branco} height={"100%"} width={"100%"}/>
                </View>
                <View style={Style.text}>
                    <Text style={Typography.drawerButton}>
                        {props.title}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}