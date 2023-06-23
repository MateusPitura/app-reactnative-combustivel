import React, { useRef } from "react";
import { TextInput, Keyboard } from "react-native";

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
            onChangeText={text=>props.setState(text)}
            blurOnSubmit={false}
            //Caso seja informado a propriedade identifier (props.identifier != null) ref receberá
            //uma referência. Caso não seja informado ref receberá uma referência genérica/qualquer
            ref={props.identifier?(input)=>{props.identifier.current = input}:useRef(null)}
            returnKeyType={props.returnKeyType}
            //Caso o botão de retorno do teclado seja "done", o teclado será escondido ao clicar
            //no botão. Caso seja diferente de "done" irá redirecionar para o próximo input
            onSubmitEditing={props.returnKeyType=="done"?Keyboard.dismiss:()=>props.next.current.focus()}
        />
    );
}