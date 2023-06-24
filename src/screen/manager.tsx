import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Calculadora from "./calculadora";
import Adicionar from "./adicionar";
import Drawer from "./drawer";

const DrawerNavigator = createDrawerNavigator();

export default function(){
    return(
        <NavigationContainer>
            <DrawerNavigator.Navigator
                initialRouteName="Adicionar"
                drawerContent={(props) => <Drawer {...props}/>}
                screenOptions={{
                    headerShown: false,
                    drawerType: 'front',    
                }}
            >
                <DrawerNavigator.Screen
                    name="Calculadora"
                    component={Calculadora}
                    options={{
                        drawerItemStyle: {height: 0} //Oculta o item da lista do drawer
                    }}
                />
                <DrawerNavigator.Screen
                    name="Adicionar"
                    component={Adicionar}
                    options={{
                        swipeEnabled: false, //Desativa o movimento de "puxar" o drawer
                    }}
                />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    );
};

