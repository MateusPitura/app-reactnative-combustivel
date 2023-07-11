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
import DropDownTop from "../asset/icon/drop-down-top.svg"
import DropDownDown from "../asset/icon/drop-down-down.svg"
import Color from "../style/color";

export default function(props: any){
    
    const [isClicked, setIsClicked] = useState(false);
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
                <View style={Style.box}>
                    <View style={Style.text}>
                        <Text style={Typography.regular}>{props.state}</Text>
                    </View>
                    <View style={Style.icon}>
                        {isClicked
                        ?
                        <DropDownTop fill={Color.preto} height={20} width={20}/>
                        :
                        <DropDownDown fill={Color.preto} height={20} width={20}/>
                        }
                    </View>
                </View>
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