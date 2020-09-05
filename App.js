import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home'
import Login from './Screens/Login'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

library.add(faUserCircle);

const LoginIcon = (props) => {
  return (
    <TouchableOpacity style={{right: 10}}
                      onPress={props.onPress}
    >
      <FontAwesomeIcon icon={faUserCircle}
                       size={24}
      />
    </TouchableOpacity>
  );
}

export default function App(props) {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
                       name="Basket Stat"
                       component={Home}
                       options={{
                         headerRight: (props) => (
                           <LoginIcon
                             onPress={()=>{
                               props.navigation.navigate("Login");
                             }}
                            />
                         ),
                       }}
        />
        <Stack.Screen
                      name="Login"
                      component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
