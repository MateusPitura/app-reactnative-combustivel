import React, { useState, useEffect, useCallback } from "react";
import {View, Text } from 'react-native';
import { estilo } from '../style/component-custom-keyboard'
import Display from "./display";
import { typography } from "../style/typography";
import CustomKeyboard from "./custom-keyboard";
import Theme from "../data/theme";

export default function(props: any){

    const [firstValue, setFirstValue] = useState(props.value[0]);
    const [secondValue, setSecondValue] = useState(props.value[2]);
    const [thirdValue, setThirdValue] = useState(props.value[3]);

    useEffect(
        useCallback(()=>{
            const value = firstValue + "," + secondValue + thirdValue;
            props.setValue(value);
        }, [firstValue, secondValue, thirdValue]), [firstValue, secondValue, thirdValue]
    )

    const Style = estilo(Theme.theme);

    const Typography = typography(Theme.theme)

    return(
        <CustomKeyboard
            visible={props.visible}
            setVisible={props.setVisible}
        >
            <Display 
                number={firstValue}
                setValue={setFirstValue}
            />
            <View style={Style.virgula}>
                <View style={Style.flexHeader}></View>
                <View style={Style.flexBody}>
                    <Text style={Typography.keyboard}>
                        ,
                    </Text>
                </View>
                <View style={Style.flexHeader}></View>
            </View>
            <Display 
                number={secondValue}
                setValue={setSecondValue}
            />
            <Display
                number={thirdValue}
                setValue={setThirdValue}
            />
        </CustomKeyboard>
    );
}