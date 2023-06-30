import React, { useState, useEffect, useCallback } from "react";
import { 
    View, 
    Text, 
    FlatList, 
    TouchableWithoutFeedback,
    LayoutAnimation,
} from "react-native";
import { 
    DrawerItemList, 
    DrawerItem,
    useDrawerStatus
} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";

//Import Style
import Style from "../style/screen-drawer";
import Typography from "../style/typography";

//Import Asset
import Car from "../asset/icon/car-light-off.svg"
import Bin from '../asset/icon/bin.svg';

//Import Component
import DrawerButton from "../component/drawer-button";
import Global from "../component/global";

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
        } catch(error){
            console.log(error);
        }
    }

    const deleteCar = async(id: string) => {
        try{
            const response = await AsyncStorage.getItem("@meucarroflex:carro");
            const previousData = response ? JSON.parse(response) : [];
            const data = previousData.filter((item: any) => item.id !== id);
            await AsyncStorage.setItem("@meucarroflex:carro", JSON.stringify(data));
            setCarro(data);
            LayoutAnimation.configureNext(layoutAnimConfig);
        } catch(error){
            console.log(error);
        }
    }

    const layoutAnimConfig = {
        duration: 300,
        update: {
            type: LayoutAnimation.Types.easeInEaseOut, 
        },
        delete: {
            duration: 100,
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
        },
    };

    return(
        <View style={Style.container}>
            <View style={Style.header}>
                <View style={Style.title}>
                    <Text style={Typography.drawerHeader}>{Global.nomeCarro}</Text>
                </View>
                <View style={Style.display}>
                    <View style={Style.icon}>
                        <Car width={"80%"} height={"80%"}/>
                    </View>
                    <View style={Style.text}>
                        <Text style={Typography.drawerRegular}>
                            E: {Global.consumoEtanol} km/l{'\n'}
                            G: {Global.consumoGasolina} km/l{'\n'}
                            R: {Global.rendimento}%{'\n'}
                        </Text>
                    </View>
                </View>
            </View>
            <DrawerButton
                title="Adicionar"
                onPress={()=>props.navigation.navigate('Adicionar')}
            />
            <View style={Style.list}>
                <DrawerItemList {...props}/>
                <FlatList
                    data={carro}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>
                        <DrawerItem
                            label={item.nomeCarro}
                            labelStyle={Typography.regular}
                            icon={()=>
                                <TouchableWithoutFeedback
                                    onPress={()=>deleteCar(item.id)}
                                >
                                    <Bin width={20} height={"100%"}/>
                                </TouchableWithoutFeedback>
                            }
                            onPress={()=>{
                                Global.nomeCarro = item.nomeCarro;
                                Global.consumoEtanol = item.consumoEtanol;
                                Global.consumoGasolina = item.consumoGasolina;
                                Global.rendimento = item.rendimento;
                            }}
                        />
                    }
                />
            </View>
        </View>
    );
}