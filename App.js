import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"> 
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              title:'Bem vindo',
              headerStyle: {
                backgroundColor: '#121212'
              },
              headerTintColor: '#fff',
                  
            }}
            />
          

            <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


















// const Stack = createStackNavigator();
// export default function App() {
//   return(
//     <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home"> 
//           <Stack.Screen name="Home" component={Home}
//           options={{
//             title:'Inicio',
//             headerStyle:{
//               backgroundColor:'red'
//             },
//             headerTintColor: '#fff',
//             headerShown: true
//           }}

//           />
//           <Stack.Screen name="Sobre" component={Sobre}/>
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }