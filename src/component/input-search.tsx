import React from "react";
import { TextInput, Keyboard } from "react-native";

import { estilo } from "../style/component-input-search";
import { typography } from "../style/typography";
import Color from "../style/color";
import Theme from "../data/theme";

export default function(props: any){

    const Style = estilo(Theme.theme==null?"light":Theme.theme);

    const Typography = typography(Theme.theme==null?"light":Theme.theme)

    return(
        <TextInput
            style={[Style.container, Typography.regular]}
            placeholder={props.placeholder}
            placeholderTextColor={Color["light"].placeholder}
            cursorColor={Color["light"].vermelho}
            inputMode={props.inputMode}
            maxLength={props.maxLength}
            onChangeText={text=>{props.setState(text)}}
            blurOnSubmit={false}
            ref={props.identifier}
            returnKeyType={props.returnKeyType}
            onSubmitEditing={Keyboard.dismiss} //Caso o botão de retorno do teclado seja "done", o teclado será será executado uma função ou será escondido ao clicar no botão. Caso seja diferente de "done" irá redirecionar para o próximo input 
        />
    );
}