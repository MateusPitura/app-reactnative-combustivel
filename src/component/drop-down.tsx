import React, { useState } from "react";
import { 
    View,
    TouchableOpacity,
    FlatList,
    Text,
} from 'react-native';

import Style from '../style/component-drop-down';
import Typography from "../style/typography";
import InputSearch from "./input-search";

export default function(props: any){
    
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState(props.selected);
    const [data, setData] = useState(props.list);
    
    const onSearch = (search: any) => {
        if(search !== ''){
            const filterData = data.filter(item => {
                return item.field.toLowerCase().indexOf(search.toLowerCase()) > -1; //Função que realiza a busca
            });
            setData(filterData);
        } else {
            setData(props.list);
        }
    }

    return(
        <View>
            <TouchableOpacity
                style={Style.input}
                onPress={()=>{setIsClicked(!isClicked)}}
            >
                <Text style={Typography.regular}>{props.state}</Text>
            </TouchableOpacity>
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
                    nestedScrollEnabled={true}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity
                                onPress={()=>{
                                    props.setState(item.field);
                                    setIsClicked(!isClicked);
                                    onSearch('');
                                }}
                            >
                                <View style={Style.list}>
                                    <Text style={Typography.regular}>{item.field}</Text>
                                </View>
                            </TouchableOpacity>
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