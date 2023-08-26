import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Calcular from "./calcular";
import Adicionar from "./adicionar";
import Drawer from "./drawer";
import Theme from "../data/theme";

const DrawerNavigator = createDrawerNavigator();

export default function(){

    // const recoveryTheme = async() => {
    //     const response = await read("@meucarroflex:theme");
    //     console.log("G", response)
    //     if(response==null){
    //         setTheme('light');
    //         await create("@meucarroflex:theme", "light");
    //         return
    //     }
    //     setTheme(response);
    // }

    return(
        <NavigationContainer>
            <DrawerNavigator.Navigator
                initialRouteName="Calcular"
                drawerContent={(props) => <Drawer {...props}/>}
                screenOptions={{
                    headerShown: false,
                    drawerType: 'slide',    
                }}
            >
                <DrawerNavigator.Screen
                    name="Calcular"
                    component={Calcular}
                    options={{
                        drawerItemStyle: {height: 0}, //Oculta o item da lista do drawer
                        unmountOnBlur:true,
                    }}
                />
                <DrawerNavigator.Screen
                    name="Adicionar"
                    component={Adicionar}
                    options={{
                        drawerItemStyle: {height: 0}, //Oculta o item da lista do drawer
                        swipeEnabled: false, //Desativa o movimento de "puxar" o drawer
                        unmountOnBlur:true
                    }}
                />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    );
};

