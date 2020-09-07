import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegistrationScreen } from './src/screens'; /* Firebase screens */
import Home from './Screens/Home';
import Login from './Screens/Login';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import TouchableIcon from './Components/Icons/TouchableIcon';

library.add(faUserCircle, faBasketballBall);

export default function App(props) {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
                       name="Basket Stat"
                       component={Home}
                       options={{
                         headerLeft: () => (
                           <View style={{left: 30}}>
                             <FontAwesomeIcon icon={faBasketballBall}
                                              size={24}
                              />
                          </View>
                         ),
                         headerRight: ({navigation}) => (
                          <View>
                              <TouchableIcon
                                 onPress={"Nav"}
                                 Screen={"Register"}
                                 Icon = {faUserCircle}
                                 IconSize = {24}
                                 IconText = {"Register"}
                               />
                          </View>
                         ),
                       }}
        />
        <Stack.Screen
                      name="Register"
                      component={RegistrationScreen}
                      options={{
                         headerLeft: () => (
                           <View style={{left: 30}}>
                             <FontAwesomeIcon icon={faBasketballBall}
                                              size={24}
                              />
                          </View>
                         )
                       }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
