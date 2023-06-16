import React from "react";
import { View, TextInput } from "react-native";

import Style from "../style/component-input";
import Text from "../style/text";
import Color from "../style/color";

export default function(props: any){
    return(
        <TextInput
            style={[Style.container, Text.regular]}
            placeholder={props.placeholder}
            cursorColor={Color.vermelho}
            inputMode="numeric"
            maxLength={4}
        />
    );
}