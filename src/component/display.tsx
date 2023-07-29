import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import Style from '../style/component-display'
import ArrowUp from "../asset/icon/arrow-up.svg"
import ArrowDown from "../asset/icon/arrow-down.svg"
import Color from "../style/color";
import Typography from "../style/typography";

export default function(props: any){

    const handleBtnChangeValue = (increment: number, comparison: number) => {
        const result = parseFloat(props.number)+increment;
        const compare = result>comparison?props.number:result
        props.setValue(compare.toString())
    }

    return(
        <View style={Style.display}>
            <TouchableOpacity 
                style={Style.button}
                onPress={()=>{
                    handleBtnChangeValue(1, 9)
                }}
            >
                <ArrowUp fill={Color.keyColor} height={50} width={50}/>
            </TouchableOpacity>
            <View style={Style.number}>
                <Text style={Typography.keyboard}>
                    {props.number}
                </Text>
            </View>
            <TouchableOpacity 
                style={Style.button}
                onPress={()=>{
                    handleBtnChangeValue(-1, -1)
                }}
            >
                <ArrowDown fill={Color.keyColor} height={50} width={50}/>
            </TouchableOpacity>
        </View>
    );
}