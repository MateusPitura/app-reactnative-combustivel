import React from "react";

import {View, Text, Modal} from "react-native";

import Style from "../style/component-modal"
import Typography from "../style/typography";

export default function(props: any){
    return(
        <Modal
            animationType="slide"
            visible={props.visible}
            transparent={true}
        >
            <View style={Style.background}>
                <View style={Style.container}>
                    {props.children}
                </View>
            </View>
        </Modal>
    );
}