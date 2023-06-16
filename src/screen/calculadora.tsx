import React from "react";
import { 
    View, 
    Text, 
    Button, 
    TouchableWithoutFeedback, 
} from "react-native";

//Import Style
import Style from "../style/screen-calculadora";
import Texts from "../style/text";

//Import Asset
import Stack from '../asset/icon/stack-drawer-navigation.svg';

//Import Component
import Input from "../component/input";

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
            <View style={Style.container}>
                <Text style={Texts.regular}>
                    Preço da gasolina
                </Text>
                <Input
                    placeholder="5.43"
                />
                <Text style={Texts.regular}>
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