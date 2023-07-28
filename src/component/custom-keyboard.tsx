import React, { useState } from "react";
import {View, Text, Keyboard} from 'react-native';
import Modal from 'react-native-modal'
import Style from '../style/component-custom-keyboard'
import Display from "./display";
import Typography from "../style/typography";

export default function(props: any){

    const [firstValue, setFirstValue] = useState(props.number[0]);
    const [secondValue, setSecondValue] = useState(props.number[2]);
    const [thirdValue, setThirdValue] = useState(props.number[3]);

    const handleChangeNumber = () => {
        const value = firstValue + "," + secondValue + thirdValue;
        props.setNumber(value)
    }

    return(
        <Modal
            isVisible={props.visible}
            animationInTiming={500}
            animationOutTiming={500}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={Style.modal}
            hasBackdrop={false}
            coverScreen={false}
            onBackButtonPress={()=>{
                Keyboard.dismiss() //Apesar de não haver teclado nativo, essa propriedade remove o focus() também
                props.setVisible(false)
            }}
        >
            <Display 
                number={firstValue}
                setValue={setFirstValue}
                setNumber={handleChangeNumber}
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
                setNumber={handleChangeNumber}
            />
            <Display 
                number={thirdValue}
                setValue={setThirdValue}
                setNumber={handleChangeNumber}
            />
        </Modal>
    );
}