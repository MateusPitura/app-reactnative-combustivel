import React, { useState, useRef, useEffect, useCallback } from "react";
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

export default function(props: any){
    
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState("");
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

    const input = useRef(null);

    useEffect(()=>{
        setTimeout(
            ()=>{
                if(isClicked==true){
                    input.current?.focus();
                }
            },
        ), 0}, [isClicked]
    );

    return(
        <View>
            <TouchableOpacity
                style={props.dataIsValid==true?Style.valid:Style.invalid}
                onPress={()=>{setIsClicked(!isClicked)}}
            >
                <View style={Style.box}>
                    <View style={Style.text}>
                        {selected==""
                        ?
                        <Text style={Typography.placeholder}>{props.placeholder}</Text>
                        :
                        <Text style={Typography.regular}>{selected}</Text>
                        }
                    </View>
                    <View style={Style.icon}>
                        {isClicked
                        ?
                        <DropDownTop height={20} width={20}/>
                        :
                        <DropDownDown height={20} width={20}/>
                        }
                    </View>
                </View>
            </TouchableOpacity>
            {props.dataIsValid==true
            ?
            null
            :
            <View style={Style.aviso}>
                <Text style={Typography.aviso}>
                    Preencha este campo corretamente
                </Text>
            </View>
            }
            {isClicked
            ?
            <View style={Style.container}>
                <InputSearch
                    placeholder="Buscar"
                    inputMode="text"
                    maxLength={255}
                    setState={onSearch}
                    identifier={input}
                    returnKeyType="search"
                />
                <FlatList
                    data={data}
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps='handled'
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity
                                onPress={()=>{
                                    props.setState(item.field);
                                    setSelected(item.field);
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