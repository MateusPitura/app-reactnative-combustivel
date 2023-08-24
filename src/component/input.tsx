import React, { useState, useRef } from "react";
import { View, Text, TextInput, Keyboard} from "react-native";

import { estilo } from "../style/component-input";
import { typography } from "../style/typography";
import Color from "../style/color";
import Theme from "../data/theme";

export default function(props: any){

    const [keyboardIsHidden, setKeyboardIsHidden] = useState(false);

    const Style = estilo(Theme.theme==null?"light":Theme.theme);

    const Typography = typography(Theme.theme==null?"light":Theme.theme)

    return(
        <View>
            <TextInput
                style={[props.dataIsValid==true?Style.valid:Style.invalid, Typography.regular]}
                placeholder={props.placeholder}
                value={props.firstClick==true?undefined:props.value} //Depois do primeiro click aparece apenas o placeholder, depois de clicar aparece o valor
                placeholderTextColor={Color["light"].placeholder}
                cursorColor={Color["light"].vermelho}
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
                        props.identifier==undefined
                        ?
                        ()=>{
                            props.setFirstClick(false)
                            props.keyboard(true)
                        }
                        :
                        ()=>{
                            if(keyboardIsHidden==true){
                                props.setFirstClick(false)
                                props.keyboard(true)
                                setKeyboardIsHidden(false)
                                return
                            }
                            Keyboard.dismiss()
                            setKeyboardIsHidden(true)
                            props.identifier.current.focus()
                        }
                }
                onBlur=
                {
                    props.keyboard==undefined
                    ?
                    undefined
                    :
                    ()=>{
                        props.keyboard(false)
                    }
                }
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