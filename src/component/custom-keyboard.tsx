import React from "react";
import {View, Text} from 'react-native';
import Modal from 'react-native-modal'
import Style from '../style/component-custom-keyboard'
import Display from "./display";
import Typography from "../style/typography";

export default function(){
    return(
        <Modal
            isVisible={true}
            animationInTiming={1000}
            animationOutTiming={1500}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={Style.modal}
            hasBackdrop={false}
            coverScreen={false}
        >
            <View style={Style.container}>
                <Display placeholder={3}/>
                <View style={Style.virgula}>
                    <View style={Style.flexHeader}></View>
                    <View style={Style.flexBody}>
                        <Text style={Typography.keyboard}>
                            ,
                        </Text>
                    </View>
                    <View style={Style.flexHeader}></View>
                </View>
                <Display placeholder={8}/>
                <Display placeholder={4}/>
            </View>
        </Modal>
    );
}