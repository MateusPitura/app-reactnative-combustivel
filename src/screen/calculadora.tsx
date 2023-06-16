import React from "react";
import { 
    View, 
    Text, 
    Button, 
    TouchableWithoutFeedback, 
} from "react-native";

//Import Style
import Style from "../style/screen-calculadora";
import Typography from "../style/text";
import Color from '../style/color'

//Import Asset
import Stack from '../asset/icon/stack-drawer-navigation.svg';

//Import Component
import Input from "../component/input";
import Shadow from 'react-native-linear-gradient';

export default function({navigation}: any){
    return(
        <View style={Style.background}>
            <TouchableWithoutFeedback
                onPress={()=>navigation.toggleDrawer()}
            >
                <View style={Style.header}>
                    <Stack width={50} height={50}/>
                </View>
            </TouchableWithoutFeedback>
            <Shadow
                colors={[Color.vermelho, Color.vermelhoEscuro]}
                style={Style.shadow}
            >
                <View style={Style.corner}></View>
            </Shadow>
            <View style={Style.container}>
                <Text style={Typography.regular}>
                    Preço da gasolina
                </Text>
                <Input
                    placeholder="5.43"
                />
                <Text style={Typography.regular}>
                    Preço do etanol
                </Text>
                <Input
                    placeholder="3.84"
                />
                <Button
                    title="CALCULAR"
                    onPress={()=>{}}
                />
            </View>
        </View>
    );
}