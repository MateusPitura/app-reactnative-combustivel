import React, { Children } from "react";
import Color from "../style/color";
import Shadow from 'react-native-linear-gradient';

export default function(props: any){
    return(
        <Shadow
            colors={[Color.vermelho, Color.vermelhoEscuro]}
            style={props.style}
        >
            {props.children}
        </Shadow>
    );
}