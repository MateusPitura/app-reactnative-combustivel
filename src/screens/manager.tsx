import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Calculadora from "./calculadora";
import Adicionar from "./adicionar";

const DrawerNavigator = createDrawerNavigator();

export default function(){
    return(
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen
                name="calculadora"
                component={Calculadora}
                options={{title: "Calculadora"}}
            />
        </DrawerNavigator.Navigator>
    );
};

