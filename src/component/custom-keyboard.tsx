import React from "react";
import { Keyboard, View }  from 'react-native';
import Modal from 'react-native-modal'
import Style from '../style/component-custom-keyboard'
import { Shadow } from 'react-native-shadow-2';

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
            <Shadow sides={{"end": false, "start": false, "bottom": false, "top": true}}>
                <View style={Style.body}>
                    {props.children}
                </View>
            </Shadow>
        </Modal>
    );
}