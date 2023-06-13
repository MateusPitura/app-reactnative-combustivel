import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Manager from './screens/manager';

export default function(){ 
  return( 
    <NavigationContainer>
      <Manager/>
    </NavigationContainer>
  ); 
}; 