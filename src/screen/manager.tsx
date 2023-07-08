import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Calcular from "./calcular";
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
                    name="Calcular"
                    component={Calcular}
                    options={{
                        drawerItemStyle: {height: 0}, //Oculta o item da lista do drawer
                        unmountOnBlur:true
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

