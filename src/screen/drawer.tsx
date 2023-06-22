import React from "react";
import { View, Text } from "react-native";
import { 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerItem } 
from "@react-navigation/drawer";

import Style from "../style/screen-drawer";
import Car from "../asset/icon/car-light-off.svg"
import Typography from "../style/typography";

export default function(props: any){
    return(
        <View style={Style.container}>
            <View style={Style.header}>
                <View style={Style.title}>
                    <Text style={Typography.drawerHeader}>Prisma Joy 2008</Text>
                </View>
                <View style={Style.display}>
                    <View style={Style.icon}>
                        <Car width={"80%"} height={"80%"}/>
                    </View>
                    <View style={Style.text}>
                        <Text style={Typography.drawerRegular}>
                            G: 10km/l{'\n'}
                            E: 7km/l{'\n'}
                            R: 70%{'\n'}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={Style.list}>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props}/>
                    <DrawerItem
                        label="Carro A"
                        onPress={()=>{}}
                    />
                </DrawerContentScrollView>
            </View>
        </View>
    );
}