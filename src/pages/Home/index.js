import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';




export default function Home( {navigation} ) {
  return (
    <View>
        <Button 
        title="Sobre"
        onPress={ () => navigation.navigate('Sobre', { nome: 'Murilo'})}        
        />

    
    </View>
  );
}


