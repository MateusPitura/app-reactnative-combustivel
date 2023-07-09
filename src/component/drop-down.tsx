import React, { useState } from "react";
import { 
    View,
    TouchableHighlight,
    FlatList,
    Text,
} from 'react-native';

import Style from '../style/component-drop-down';
import Typography from "../style/typography";
import InputSearch from "./input-search";

export default function(){

    const listMarca = [
        {marca: "Chevrolet"},
        {marca: "Volkswagem"},
        {marca: "Ford"},
        {marca: "BMW"},
        {marca: "Audi"},
        {marca: "Fiat"},
        {marca: "Peogeot"},
        {marca: "Honda"},
        {marca: "Toyota"},
        {marca: "Jeep"},
    ]
    
    const [isClicked, setIsClicked] = useState(false);
    const [selectedMarca, setSelectedMarca] = useState("Chevrolet");
    const [data, setData] = useState(listMarca);
    
    const onSearch = (search: any) => {
        if(search !== ''){
            const filterData = data.filter(item => {
                return item.marca.toLowerCase().indexOf(search.toLowerCase()) > -1; //Função que realiza a busca
            });
            setData(filterData);
        } else {
            setData(listMarca);
        }
    }

    return(
        <View style={{elevation: 5}}>
            <TouchableHighlight
                style={Style.input}
                onPress={()=>{setIsClicked(!isClicked)}}
            >
                <Text style={Typography.regular}>{selectedMarca}</Text>
            </TouchableHighlight>
            {isClicked
            ?
            <View style={Style.container}>
                <InputSearch
                    placeholder="Buscar"
                    inputMode="text"
                    maxLength={255}
                    setState={onSearch}
                    returnKeyType="search"
                />
                <FlatList
                    data={data}
                    renderItem={({item}) => {
                        return(
                            <TouchableHighlight
                                onPress={()=>{
                                    setSelectedMarca(item.marca);
                                    setIsClicked(!isClicked);
                                    onSearch('');
                                }}
                            >
                                <View style={Style.list}>
                                    <Text style={Typography.regular}>{item.marca}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    }}
                    ListEmptyComponent={
                        <View style={Style.list}>
                            <Text style={Typography.regular}>Nada encontrado</Text>
                        </View>
                    }
                />
            </View>
            :
            null
            }
        </View>
        
    );
}