import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Calcular from "./calcular";
import Adicionar from "./adicionar";
import Drawer from "./drawer";
import { create, read } from '../model/storage'

const DrawerNavigator = createDrawerNavigator();

export default function(){

    const [theme, setTheme] = useState('light');

    const recoveryTheme = async() => {
        const response = await read("@meucarroflex:theme");
        console.log("G", response)
        if(response==null){
            setTheme('light');
            await create("@meucarroflex:theme", "light");
            return
        }
        setTheme(response);
    }

    const handleToggleTheme = async() => {
        const value = theme=='light'?'dark':'light';
        setTheme(value)
        await create("@meucarroflex:theme", value)
        console.log(theme)
    }

    return(
        <NavigationContainer>
            <DrawerNavigator.Navigator
                initialRouteName="Calcular"
                drawerContent={(props) => <Drawer {...props} theme={theme} handleToggleTheme={handleToggleTheme}/>}
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
                    initialParams={{
                        theme: theme
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
                    initialParams={{
                        theme: theme
                    }}
                />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    );
};

