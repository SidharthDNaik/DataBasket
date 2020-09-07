import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../GeneralStyles/HomeStyles'
import DisplayNavigator from '../Components/Navigators/DisplayNavigator'
import CardsDisplay from '../Components/Cards/CardsDisplay'

export default function Home(props) {
  var dNavNames = ["Players", "Teams"];
  return (
    <View style={Styles.HomeView}>
      <View style={Styles.HomeCard}>
        <View style={Styles.HomeCardsHeader}>
          <DisplayNavigator names={dNavNames}/>
        </View>
        <View style={{flex: 1}}>
          <CardsDisplay/>
        </View>
      </View>
    </View>
  );
}
