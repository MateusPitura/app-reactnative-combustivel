import React from "react";
import { TouchableHighlight, Text } from "react-native";

import Style from "../style/component-button"
import Typography from "../style/typography";
import Color from "../style/color";

export default function(props: any){
    return(
        <TouchableHighlight
            style={Style.container}
            underlayColor={Color.vermelhoEscuro}
            onPress={()=>{}}
        >
            <Text
                style={Typography.button}
            >
                {props.title}
            </Text>
        </TouchableHighlight>
    );
}