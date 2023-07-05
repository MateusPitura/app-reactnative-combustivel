import React from "react";
import { TouchableHighlight, Text } from "react-native";

import Style from "../style/component-button"
import Typography from "../style/typography";
import Color from "../style/color";

export default function(props: any){

    const checkInput = () => {
        if(props.data==""){
            console.log("true");
            props.setDataIsValid(true);
        } else{
            console.log("false");
            props.setDataIsValid(false);
            props.onPress()
        }
    }

    return(
        <TouchableHighlight
            style={Style.container}
            underlayColor={Color.vermelhoEscuro}
            onPress={
                props.data!=undefined
                ?
                ()=>{
                    checkInput()
                }
                :
                props.onPress
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