import React, { useState, useEffect, useCallback } from "react";
import { 
    View, 
    Text, 
    FlatList, 
    LayoutAnimation,
    Keyboard,
    TouchableOpacity,
} from "react-native";
import { 
    DrawerItem,
    useDrawerStatus
} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";
import Uuid from 'react-native-uuid';
import { create, read } from '../model/storage'

//Import Style
import Style from "../style/screen-drawer";
import Typography from "../style/typography";

//Import Asset
import Car from "../asset/icon/car-light-on.svg" //Dark
import Theme from '../style/theme'
import Bin from '../asset/icon/bin.svg';

//Import Component
import DrawerButton from "../component/drawer-button";
import CarData from "../data/car";
import Button from "../component/button";

export default function(props: any){

    const [carro, setCarro] = useState([]);

    const [firstInicialization, setfirstInicialization] = useState(false)

    const [theme, setTheme] = useState('');

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
                    recoveryTheme();
                    recoveryData();
                }
            }, []
        ), []
    );

    const createCar = async() => {
        try{
            const data = [{
                id: Uuid.v4(),
                nomeCarro: "Prisma Joy 1.4",
                consumoEtanol: "07,00",
                consumoGasolina: "10,40",
                rendimento: "67.31",
                active: true,
            }]
            CarData.id = data[0].id;
            CarData.nomeCarro = data[0].nomeCarro;
            CarData.consumoEtanol = data[0].consumoEtanol;
            CarData.consumoGasolina = data[0].consumoGasolina;
            CarData.rendimento = data[0].rendimento;
            await AsyncStorage.setItem("@meucarroflex:carro", JSON.stringify(data));
        } catch(error){
            console.log(error);
        }
    }

    const recoveryData = async() => {
        try{
            const response = await AsyncStorage.getItem("@meucarroflex:carro");
            const data = response ? JSON.parse(response) : [];
            if(data==0){
                createCar();
                return;
            }
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
            const list = data.filter((item: any) => item.active === false);
            setCarro(list);
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

    const recoveryTheme = async() => {
        const response = await read("@meucarroflex:theme");
        console.log("G", response)
        if(response==null){
            setTheme('light');
            Theme.theme = "light";
            await create("@meucarroflex:theme", "light");
            return
        }
        setTheme(response);
        Theme.theme = response;
    }

    const handleToggleTheme = async() => {
        const value = theme=='light'?'dark':'light';
        setTheme(value)
        Theme.theme = value;
        await create("@meucarroflex:theme", value)
    }

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
                    <View style={Style.item}>
                        <View style={Style.bin}>
                            <TouchableOpacity
                                onPress={()=>{
                                    deleteCar(item.id)
                                }}
                            >
                                <Bin width={20} height={20}/>
                            </TouchableOpacity>
                        </View>
                        <View style={Style.label}>
                        <DrawerItem
                            label={item.nomeCarro}
                            labelStyle={Typography.regular}
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
                        </View>
                    </View>
                    }
                />
            </View>
            <View style={{flexDirection: "row"}}>
                <View style={{flex: 1, padding: 20}}>
                    <Button
                        title="Modo escuro"
                        onPress={()=>{handleToggleTheme()}}
                    />
                </View>
                <View style={Style.button}>
                    <DrawerButton
                        title="Adicionar"
                        onPress={()=>props.navigation.navigate('Adicionar')}
                    />
                </View>
            </View>
        </View>
    );
}