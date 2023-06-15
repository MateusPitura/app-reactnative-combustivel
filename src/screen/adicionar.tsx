import React from "react";
import { View, Text, Button } from "react-native";

export default function({navigation}: any){
    return(
        <View>
            <Button
                title="Go back"
                onPress={()=>navigation.goBack()}
            />
        </View>
    );
}