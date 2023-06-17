import React from "react";
import { TextInput } from "react-native";

import Style from "../style/component-input";
import Text from "../style/typography";
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