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
                    <Text style={Typography.header}>
                        Resultado{'\n'}
                    </Text>
                    <Text style={Typography.modal}>
                        O etanol está custando {props.comparacaoCombustivel}% da gasolina{'\n'}
                    </Text>
                    <Text style={Typography.modal}>
                        Portanto é mais vantajoso abastecer com {props.combustivelMaisVantajoso}{'\n'}
                    </Text>
                    <View style={Style.button}>
                        {props.children}
                    </View>
                </View>
            </View>
        </Modal>
    );
}