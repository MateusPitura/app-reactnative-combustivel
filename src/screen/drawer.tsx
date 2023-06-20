import React from "react";
import { View, Text } from "react-native";
import { 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerItem } 
from "@react-navigation/drawer";

import Style from "../style/screen-drawer";
import Car from "../asset/icon/car.svg"
import Typography from "../style/typography";

export default function(props: any){
    return(
        <View style={Style.container}>
            <View style={Style.header}>
                <View style={Style.title}>
                    <Text style={Typography.drawerHeader}>Prisma Joy 2008</Text>
                </View>
                <View style={Style.display}>
                    <Car width={150} height={150}/>
                    <Text style={Typography.drawerRegular}>
                        Gasolina: 10km/l{'\n'}
                        Etanol: 7km/l{'\n'}
                        Relação: 70%{'\n'}
                    </Text>
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