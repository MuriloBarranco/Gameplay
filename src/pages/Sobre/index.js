import React from 'react';
import {View, Text, } from 'react-native';


export default function Sobre({ route }) {
  return (
    <View>
       <Text> Meu nome é: {route.params} </Text>
    </View>
  );
}




