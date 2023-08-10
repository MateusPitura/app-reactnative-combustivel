import React, { useState, useEffect, useCallback } from "react";
import { 
    View, 
    Text, 
    FlatList, 
    TouchableWithoutFeedback,
    LayoutAnimation,
    Keyboard,
} from "react-native";
import { 
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
import CarData from "../data/car";

export default function(props: any){

    const [carro, setCarro] = useState([]);

    const [firstInicialization, setfirstInicialization] = useState(false)

    const isDrawerOpen = useDrawerStatus() === 'open';

    useEffect(
        useCallback(
            ()=>{
                if(isDrawerOpen){
                    Keyboard.dismiss();
                    readCar();
                }
            }, [isDrawerOpen]
        ), [isDrawerOpen]
    );

    useEffect(
        useCallback(
            ()=>{
                if(!firstInicialization){
                    recoveryData();
                }
            }, []
        ), []
    );

    const recoveryData = async() => {
        if(CarData.id){
            return
        }
        try{
            const response = await AsyncStorage.getItem("@meucarroflex:carro");
            const data = response ? JSON.parse(response) : [];
            const filterData = data.filter((item: any) => item.active === true);
            CarData.id = filterData.id;
            CarData.nomeCarro = filterData.nomeCarro;
            CarData.consumoEtanol = filterData.consumoEtanol;
            CarData.consumoGasolina = filterData.consumoGasolina;
            CarData.rendimento = filterData.rendimento;
        } catch(error){
            console.log(error);
        }
        setfirstInicialization(true);
    }

    const readCar = async () => {
        try{
            const response = await AsyncStorage.getItem("@meucarroflex:carro");
            const data = response ? JSON.parse(response) : [];
            const filterData = data.filter((item: any) => item.active === false);
            setCarro(filterData);
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

    const setCurrentCar = async(id: string) => {
        try{
            const response = await AsyncStorage.getItem("@meucarroflex:carro");
            const previousData = response ? JSON.parse(response) : [];

            const newCar = previousData.filter((item: any) => item.active === true);
            if(newCar!=0){
                newCar[0].active = false;
            }

            const oldCar = previousData.filter((item: any) => item.id === id);
            oldCar[0].active = true;

            const filterData = previousData.filter((item: any) => item.id !== id && item.active === false)
            console.log(filterData)
            console.log(oldCar)
            console.log(newCar)
            const data = [...filterData, ...oldCar, ...newCar]
            console.log(data)
            await AsyncStorage.setItem("@meucarroflex:carro", JSON.stringify(data));
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
                    <Text 
                        style={Typography.drawerHeader}
                        numberOfLines={1}
                    >
                        {CarData.nomeCarro}
                    </Text>
                </View>
                <View style={Style.display}>
                    <View style={Style.icon}>
                        <Car height={"100%"} width={"100%"}/>
                    </View>
                    <View style={Style.text}>
                        <Text style={Typography.drawerRegular}>
                            E: {CarData.consumoEtanol} km/l{'\n'}
                            G: {CarData.consumoGasolina} km/l{'\n'}
                            R: {CarData.rendimento?CarData.rendimento.replace('.',','):"0"}%{'\n'}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={Style.list}>
                <FlatList
                    data={carro}
                    keyExtractor={item => item.id}
                    renderItem={({item}: any)=>
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
                                CarData.id = item.id;
                                CarData.nomeCarro = item.nomeCarro;
                                CarData.consumoEtanol = item.consumoEtanol;
                                CarData.consumoGasolina = item.consumoGasolina;
                                CarData.rendimento = item.rendimento;
                                setCurrentCar(item.id);
                                readCar();
                            }}
                        />
                    }
                />
            </View>
            <View style={Style.button}>
                <DrawerButton
                    title="Adicionar"
                    onPress={()=>props.navigation.navigate('Adicionar')}
                />
            </View>
        </View>
    );
}