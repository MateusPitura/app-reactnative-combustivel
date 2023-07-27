import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import Style from '../style/component-display'
import ArrowUp from "../asset/icon/arrow-up.svg"
import ArrowDown from "../asset/icon/arrow-down.svg"
import Color from "../style/color";
import Typography from "../style/typography";

export default function(props: any){
    return(
        <View style={Style.display}>
            <TouchableOpacity 
                style={Style.button}
                onPress={()=>{
                    const result = props.number+1;
                    props.setValue(result>9?props.number:result)
                    props.setNumber()
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
                    const result = props.number-1;
                    props.setValue(result<0?props.number:result)
                    props.setNumber()
                }}
            >
                <ArrowDown fill={Color.keyColor} height={50} width={50}/>
            </TouchableOpacity>
        </View>
    );
}