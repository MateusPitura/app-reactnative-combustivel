import React, { useState, useEffect, useCallback } from "react";
import { 
    View, 
    Text, 
    FlatList, 
    Alert, 
} from "react-native";
import { 
    DrawerItemList, 
    DrawerItem,
    useDrawerStatus
} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";

import Style from "../style/screen-drawer";
import Car from "../asset/icon/car-light-off.svg"
import Typography from "../style/typography";

export default function(props: any){

    const [carro, setCarro] = useState([]);

    const isDrawerOpen = useDrawerStatus() === 'open';

    useEffect(
        useCallback(
            ()=>{
                if(isDrawerOpen){
                    readCar();
                }
            }, [isDrawerOpen]
        ), [isDrawerOpen]
    );

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
                    <Text style={Typography.drawerHeader}>Prisma Joy 1.4</Text>
                </View>
                <View style={Style.display}>
                    <View style={Style.icon}>
                        <Car width={"80%"} height={"80%"}/>
                    </View>
                    <View style={Style.text}>
                        <Text style={Typography.drawerRegular}>
                            E: 7 km/l{'\n'}
                            G: 10,40 km/l{'\n'}
                            R: 67,30%{'\n'}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={Style.list}>
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
            </View>
        </View>
    );
}