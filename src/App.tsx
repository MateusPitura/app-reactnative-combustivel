import React, {useState, useCallback, useEffect} from 'react';
import Manager from './screen/manager';
import Theme from './data/theme';
import { create, read } from './model/storage'

export default function(){ 

  const [keyView, setKeyView] = useState(0)

  const recoveryTheme = async() => {
    const response = await read("@meucarroflex:theme");
    if(response==null){
        Theme.theme = 'light'
        await create("@meucarroflex:theme", "light");
        return
    }
    Theme.theme = response;
    setKeyView(keyView+1)
  }

  useEffect(
    useCallback(
        ()=>{
          recoveryTheme()
        }, []
    ), []
  );

  return( 
    <Manager key={keyView}/>
  ); 
}; 