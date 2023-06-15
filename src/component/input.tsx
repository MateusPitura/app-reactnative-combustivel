import React from "react";
import { View, TextInput } from "react-native";

import Style from "../style/component-input"

export default function(){
    return(
        <TextInput
            style={Style.container}
        />
    );
}