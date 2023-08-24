import React from "react";
import { TouchableHighlight, Text } from "react-native";

import { estilo } from "../style/component-button"
import { typography } from "../style/typography";
import Color from "../style/color";
import Theme from "../data/theme";

export default function(props: any){

    const Style = estilo(Theme.theme==null?"light":Theme.theme)

    const Typography = typography(Theme.theme==null?"light":Theme.theme)

    return(
        <TouchableHighlight
            style={Style.container}
            underlayColor={Color["light"].vermelhoEscuro}
            onPress={props.onPress}
        >
            <Text
                style={Typography.button}
            >
                {props.title}
            </Text>
        </TouchableHighlight>
    );
}