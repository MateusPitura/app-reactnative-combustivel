import React, { useState, useEffect, useCallback } from "react";
import {View, Text } from 'react-native';
import Style from '../style/component-custom-keyboard'
import Display from "./display";
import Typography from "../style/typography";
import CustomKeyboard from "./custom-keyboard";

export default function(props: any){

    const [firstValue, setFirstValue] = useState(props.value[0]);
    const [secondValue, setSecondValue] = useState(props.value[1]);
    const [thirdValue, setThirdValue] = useState(props.value[3]);
    const [fourthValue, setFourthValue] = useState(props.value[4]);

    useEffect(
        useCallback(()=>{
            const value = firstValue + secondValue + "," + thirdValue + fourthValue;
            props.setValue(value);
        }, [firstValue, secondValue, thirdValue, fourthValue]), [firstValue, secondValue, thirdValue, fourthValue]
    )

    return(
        <CustomKeyboard
            visible={props.visible}
            setVisible={props.setVisible}
        >
            <Display 
                number={firstValue}
                setValue={setFirstValue}
            />
            <Display 
                number={secondValue}
                setValue={setSecondValue}
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
                number={thirdValue}
                setValue={setThirdValue}
            />
            <Display 
                number={fourthValue}
                setValue={setFourthValue}
            />
        </CustomKeyboard>
    );
}