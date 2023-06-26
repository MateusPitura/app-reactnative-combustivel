import React, { useState } from "react";
import { View, Text, FlatList, Alert, Button } from "react-native";
import { 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerItem } 
from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";

import Style from "../style/screen-drawer";
import Car from "../asset/icon/car-light-off.svg"
import Typography from "../style/typography";

export default function(props: any){

    const [carro, setCarro] = useState([]);

    const readCar = async () => {
        try{
            const response = await AsyncStorage.getItem("@meucarroflex:carro");
            const data = response ? JSON.parse(response) : [];
            setCarro(data);
            Alert.alert("Carro lidos");
        } catch(error){
            console.log(error);
        }
    }

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
            <Button
                title="Listar"
                onPress={()=>readCar()}
            />
            <View style={Style.list}>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props}/>
                    <FlatList
                        data={carro}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>
                            <DrawerItem
                                label={item.nomeCarro}
                                onPress={()=>{}}
                            />
                        }
                    />
                </DrawerContentScrollView>
            </View>
        </View>
    );
}