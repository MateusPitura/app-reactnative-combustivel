import React from "react";
import { 
    View, 
    Text, 
    Button, 
    TouchableWithoutFeedback, 
} from "react-native";

//Import Style
import Style from '../style/screen-calculadora';
import Texts from "../style/text";

//Import Asset
import Stack from '../asset/icon/stack-drawer-navigation.svg';

//Import Component
import Input from "../component/input";

export default function({navigation}: any){
    return(
        <View style={Style.header}>
            <TouchableWithoutFeedback
                onPress={()=>navigation.toggleDrawer()}
            >
                <Stack width={50} height={50}/>
            </TouchableWithoutFeedback>
            <View style={Style.main}>
                <Text>
                    Preço da gasolina
                </Text>
                <Input
                />
                <Text style={Texts.button}>
                    Preço do etanol
                </Text>
                <Input
                />
                <Button
                    title="CALCULAR"
                    onPress={()=>{}}
                />
            </View>
        </View>
    );
}