import React from "react";
import {View, Text, Keyboard} from 'react-native';
import Modal from 'react-native-modal'
import Style from '../style/component-custom-keyboard'
import Display from "./display";
import Typography from "../style/typography";

export default function(props: any){
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
            <Display placeholder={props.number[0]}/>
            <View style={Style.virgula}>
                <View style={Style.flexHeader}></View>
                <View style={Style.flexBody}>
                    <Text style={Typography.keyboard}>
                        ,
                    </Text>
                </View>
                <View style={Style.flexHeader}></View>
            </View>
            <Display placeholder={props.number[1]}/>
            <Display placeholder={props.number[2]}/>
        </Modal>
    );
}