import React from "react";
import { View, Text, Button } from "react-native";

export default function({navigation}: any){
    return(
        <View>
            <Button
                title="Stack"
                onPress={()=>navigation.toggleDrawer()}
            />
        </View>
    );
}