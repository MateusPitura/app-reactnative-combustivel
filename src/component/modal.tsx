import React from "react";

import {View, Modal} from "react-native";

import { estilo } from "../style/component-modal"

export default function(props: any){

    const Style = estilo("light");

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