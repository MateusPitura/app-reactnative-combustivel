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
                onPress={()=>{}}
            >
                <ArrowUp fill={Color.keyColor} height={50} width={50}/>
            </TouchableOpacity>
            <View style={Style.number}>
                <Text style={Typography.keyboard}>
                    {props.placeholder}
                </Text>
            </View>
            <TouchableOpacity 
                style={Style.button}
                onPress={()=>{}}
            >
                <ArrowDown fill={Color.keyColor} height={50} width={50}/>
            </TouchableOpacity>
        </View>
    );
}