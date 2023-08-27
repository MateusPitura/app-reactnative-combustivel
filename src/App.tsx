import React, {useState, useEffect} from 'react';
import {View, Text } from 'react-native';
import Manager from './screen/manager';
import Theme from './data/theme';
import { create, read } from './model/storage'

export default function(){ 

  const [isLoading, setIsLoading] = useState(true);

  const recoveryTheme = async() => {
    const response = await read("@meucarroflex:theme");
    if(response==null){
        Theme.theme = 'light'
        await create("@meucarroflex:theme", "light");
        setIsLoading(false)
        return
    }
    Theme.theme = response;
    setIsLoading(false)
  }

  useEffect(()=>{
    recoveryTheme()
  }, []);

  return(
    isLoading==true?
    <View>
      <Text>Carregando</Text>
    </View>
    :
    <Manager/>
  ); 
}; 