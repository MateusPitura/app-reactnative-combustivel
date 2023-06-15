import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerItem } 
from "@react-navigation/drawer";

import Calculadora from "./calculadora";
import Adicionar from "./adicionar";

function CustomDrawerContent(props: any){
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem
                label="Carro A"
                onPress={()=>{}}
            />
        </DrawerContentScrollView>
    );
}

const DrawerNavigator = createDrawerNavigator();

export default function(){
    return(
        <NavigationContainer>
            <DrawerNavigator.Navigator
                initialRouteName="Calculadora"
                drawerContent={(props) => <CustomDrawerContent {...props}/>}
            >
                <DrawerNavigator.Screen
                    name="Calculadora"
                    component={Calculadora}
                    options={{
                        headerShown: false,
                        drawerItemStyle: {height: 0} //Oculta o item da lista do drawer
                    }}
                />
                <DrawerNavigator.Screen
                    name="Adicionar"
                    component={Adicionar}
                    options={{
                        headerShown: false,
                        swipeEnabled: false, //Desativa o movimento de "puxar" o drawer
                    }}
                />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    );
};

