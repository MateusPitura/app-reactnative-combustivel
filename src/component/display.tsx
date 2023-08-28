import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { estilo } from '../style/component-display'
import ArrowUp from "../asset/icon/arrow-up.svg"
import ArrowDown from "../asset/icon/arrow-down.svg"
import Color from "../style/color";
import { typography } from "../style/typography";
import Theme from "../data/theme";

export default function(props: any){

    const handleBtnChangeValueGreaterThan = () => {
        const result = parseFloat(props.number)+1;
        const compare = result>9?props.number:result
        props.setValue(compare.toString())
    }

    const handleBtnChangeValueLowerThan = () => {
        const result = parseFloat(props.number)-1;
        const compare = result<0?props.number:result
        props.setValue(compare.toString())
    }

    const Style = estilo(Theme.theme);

    const Typography = typography(Theme.theme)

    return(
        <View style={Style.display}>
            <TouchableOpacity 
                style={Style.button}
                onPress={()=>{handleBtnChangeValueGreaterThan()}}
            >
                <ArrowUp fill={Color[Theme.theme].keyColor} height={50} width={50}/>
            </TouchableOpacity>
            <View style={Style.number}>
                <Text style={Typography.keyboard}>
                    {props.number}
                </Text>
            </View>
            <TouchableOpacity 
                style={Style.button}
                onPress={()=>{handleBtnChangeValueLowerThan()}}
            >
                <ArrowDown fill={Color[Theme.theme].keyColor} height={50} width={50}/>
            </TouchableOpacity>
        </View>
    );
}