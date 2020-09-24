import React, {useState} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegistrationScreen } from './src/screens'; /* Firebase screens */
import Home from './Screens/Home';
import Login from './Screens/Login';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import TouchableIcon from './Components/Icons/TouchableIcon';

library.add(faUserCircle, faBasketballBall, faPlusSquare);

export default function App(props) {

  const Stack = createStackNavigator();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('');

  const fetchData = (url) => {
      fetch(url, {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      		"x-rapidapi-key": "17cb0fee57msh46293e8a5cabfccp195d81jsne28c2543a6b1"
      	}
      }).then((response) =>{
        console.log("data was set");
        console.log(JSON.stringify(response));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function grabData(){
      if (isLoading){
        fetchData("https://api-nba-v1.p.rapidapi.com/players/teamId/17")
        setLoading(false)
      }
  }

  function reloadData(){
    setLoading(true)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
                       name="Basket Stat"
                       component={Home}
                       options={{
                         headerLeft: () => (
                           <View style={{left: 30}}>
                             <TouchableOpacity
                               onPress={reloadData}
                               >
                               <FontAwesomeIcon icon={faBasketballBall}
                                                size={24}
                                />
                              </TouchableOpacity>
                          </View>
                         ),
                         headerRight: ({navigation}) => (
                          <View style={{marginBottom:5}}>
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
