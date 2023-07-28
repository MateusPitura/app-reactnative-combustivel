import React, { useRef, useState } from "react";
import { View, Text, TextInput, Keyboard} from "react-native";

import Style from "../style/component-input";
import Typography from "../style/typography";
import Color from "../style/color";

export default function(props: any){
    return(
        <View>
            <TextInput
                style={[props.dataIsValid==true?Style.valid:Style.invalid, Typography.regular]}
                placeholder={props.placeholder}
                value={props.value}
                placeholderTextColor={Color.placeholder}
                cursorColor={Color.vermelho}
                inputMode={props.inputMode}
                maxLength={props.maxLength}
                onChangeText={text=>props.setState(text)}
                blurOnSubmit={false}
                ref={props.identifier?(input)=>{props.identifier.current = input}:useRef(null)} //Caso seja informado a propriedade identifier (props.identifier != null) ref receberá uma referência. Caso não seja informado ref receberá uma referência genérica/qualquer
                returnKeyType={props.returnKeyType}
                showSoftInputOnFocus={props.keyboard==undefined?true:false}
                onFocus=
                {
                    props.keyboard==undefined
                    ?
                    undefined
                    :
                    ()=>{
                        props.keyboard(true)
                    }
                }
                onBlur={()=>{
                    props.keyboard(false)
                }}
                onSubmitEditing=
                {
                    props.returnKeyType=="done"
                    ?
                        props.action==undefined
                        ?
                        Keyboard.dismiss
                        :
                        props.action
                    :
                    ()=>props.next.current.focus()
                } //Caso o botão de retorno do teclado seja "done", o teclado será será executado uma função ou será escondido ao clicar no botão. Caso seja diferente de "done" irá redirecionar para o próximo input 
            />
            {props.dataIsValid==true
            ?
            null
            :
            <View style={Style.aviso}>
                <Text style={Typography.aviso}>
                    Preencha este campo corretamente
                </Text>
            </View>
            }
        </View>
    );
}