import React, { useState, useRef, useEffect, useCallback } from "react";
import { 
    View,
    TouchableOpacity,
    FlatList,
    Text,
    ActivityIndicator,
} from 'react-native';

import { estilo } from '../style/component-drop-down';
import { typography } from "../style/typography";
import InputSearch from "./input-search";
import DropDownTop from "../asset/icon/arrow-up.svg"
import DropDownDown from "../asset/icon/arrow-down.svg"
import Color from "../style/color";
import Theme from "../data/theme";

export default function(props: any){
    
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState("");
    const [retrive, setRetrive] = useState(false);
    const [networkFailed, setNetworkFailed] = useState(false);
    const [falha, setFalha] = useState(false)
    const [baseData, setBaseData] = useState([]);
    const [data, setData] = useState([]);
    
    const onSearch = (search: any) => {
        if(search !== ''){
            const filterData = baseData.filter(item => {
                return item.nome.toLowerCase().indexOf(search.toLowerCase()) > -1; //Função que realiza a busca
            });
            setData(filterData);
        } else {
            setData(baseData);
        }
    }

    useEffect(()=>{
        setTimeout(
            ()=>{
                if(isClicked==true){
                    input.current?.focus();
                }
            },
        ), 0}, [isClicked]
    );

    useEffect(
        useCallback(
            ()=>{
                if(isClicked==true){
                    fetchData();
                }
            }, [props.url]
        ), [props.url]
    );

    const fetchData = async () => {
        try{
            setRetrive(true)
            setFalha(false)
            setNetworkFailed(false)
            const response = await fetch(props.url) 
            const json = await response.json()
            if(props.placeholder=="Prisma"){
                const data = json.modelos.filter((item: any) => (item.nome.toString().includes("32000") === false))
                setData(data)
                setBaseData(data)
            } else {
                const data = json.filter((item: any) => (item.nome.toString().includes("32000") === false))
                setData(data)
                setBaseData(data)
            }
            setRetrive(false)
        } catch({name, message}: any){
            setFalha(true)
            if(message=="Network request failed"){
                setNetworkFailed(true);
            }
        }
    }

    const input = useRef(null);

    const Style = estilo(Theme.theme);

    const Typography = typography(Theme.theme)

    return(
        <View>
            <TouchableOpacity
                style={props.dataIsValid==true?Style.valid:Style.invalid}
                onPress={()=>{
                    setIsClicked(!isClicked)
                    {isClicked==false?fetchData():null}
                }}
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
                        <DropDownTop fill={Color[Theme.theme].placeholder} height={40} width={40}/>
                        :
                        <DropDownDown fill={Color[Theme.theme].placeholder} height={40} width={40}/>
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
                                    props.setState(item.codigo);
                                    {props.setSelected==undefined?null:props.setSelected(item.nome)}
                                    setSelected(item.nome);
                                    setIsClicked(!isClicked);
                                    onSearch('');
                                }}
                            >
                                <View style={Style.list}>
                                    <Text style={Typography.regular}>{item.nome}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    ListEmptyComponent={
                        <View style={Style.list}>
                            {retrive==true?
                                <View>
                                    {falha==true?
                                        networkFailed==true?
                                        <Text style={Typography.regular}>Falha na conexão</Text>
                                        :
                                        <Text style={Typography.regular}>Selecione um item antes</Text>
                                    :
                                        <ActivityIndicator size={'small'} color={Color["commom"].vermelho}/>
                                    }
                                </View>
                            :
                                <Text style={Typography.regular}>Nada encontrado</Text>
                            }
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