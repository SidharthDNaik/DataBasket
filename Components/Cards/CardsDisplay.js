import React from 'react';
import { Image, Text, View } from 'react-native';
import Styles from '../../GeneralStyles/CardStyles'

const Card = (props) => {
  return(
    <View style={Styles.Card}>
      <Image style={Styles.CardIcon}
             source={require('../../Data/PlayerIcons/Lakers/LebronJames.png')}/>
    </View>
  );
}

export default function CardsDisplay (){
  return(
    <View style={Styles.CardsDisplay}>
      <Card/>
    </View>
  );
}
