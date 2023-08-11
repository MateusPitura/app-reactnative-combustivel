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
        try{
            const response = await AsyncStorage.getItem("@meucarroflex:carro");
            const data = response ? JSON.parse(response) : [];
            const filterData = data.filter((item: any) => item.active === true);
            CarData.id = filterData[0].id;
            CarData.nomeCarro = filterData[0].nomeCarro;
            CarData.consumoEtanol = filterData[0].consumoEtanol;
            CarData.consumoGasolina = filterData[0].consumoGasolina;
            CarData.rendimento = filterData[0].rendimento;
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

            const filterData = previousData.filter((item: any) => (item.id !== id && item.active === false))

            const oldCar = previousData.filter((item: any) => item.active === true);
            if(oldCar!=0){
                oldCar[0].active = false;
            }

            const newCar = previousData.filter((item: any) => item.id === id);
            newCar[0].active = true;

            const data = [...filterData, ...newCar, ...oldCar]
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
                                setTimeout(()=>readCar(), 10);
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