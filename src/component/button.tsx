import React from "react";
import { TouchableHighlight, Text } from "react-native";

import Style from "../style/component-button"
import Typography from "../style/typography";
import Color from "../style/color";

export default function(props: any){

    const checkInput = () => {
        for(var i=0; i<props.data.length; i++){
            if(props.data[i]==""){
                console.log("true");
                props.setDataIsValid(false);
                return;
            }
        }
        console.log("false");
        props.setDataIsValid(true);
        props.onPress()
    }

    return(
        <TouchableHighlight
            style={Style.container}
            underlayColor={Color.vermelhoEscuro}
            onPress={
                props.data==undefined
                ?
                props.onPress
                :
                checkInput
            }
        >
            <Text
                style={Typography.button}
            >
                {props.title}
            </Text>
        </TouchableHighlight>
    );
}