import React, { useState, useRef, useEffect } from "react";
import { 
    View,
    TouchableOpacity,
    FlatList,
    Text,
    ActivityIndicator,
} from 'react-native';

import Style from '../style/component-drop-down';
import Typography from "../style/typography";
import InputSearch from "./input-search";
import DropDownTop from "../asset/icon/drop-down-top.svg"
import DropDownDown from "../asset/icon/drop-down-down.svg"
import Color from "../style/color";

export default function(props: any){
    
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState("");
    const [retrive, setRetrive] = useState(false);
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

    const fetchData = async () => {
        try{
            setRetrive(true)
            setFalha(false)
            const response = await fetch(props.url) 
            const json = await response.json()
            if(props.placeholder=="Prisma"){
                setData(json.modelos)
                setBaseData(json.modelos)
            } else {
                setData(json)
                setBaseData(json)
            }
            setRetrive(false)
        } catch(error){
            setFalha(true)
            console.log(error)
        }
    }

    const input = useRef(null);

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
                                        <Text style={Typography.regular}>Selecione um item antes</Text>
                                    :
                                        <ActivityIndicator size={'small'} color={Color.vermelho}/>
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