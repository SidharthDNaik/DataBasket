import React from 'react';
import { Image, Text, View } from 'react-native';
import Styles from '../../GeneralStyles/CardStyles'

function setImage(player){
  switch(player){
      case "Lebron James":
        return require('../../Data/PlayerIcons/Lakers/LebronJames.png');
        break;
      case "Anthony Davis":
        return require('../../Data/PlayerIcons/Lakers/AnthonyDavis.png');
        break;
    }
}

const Card = (props) => {
  return(
    <View style={Styles.Card}>
      <View style={{padding: 5}}>
        <Image style={Styles.CardIcon}
               source={props.image}/>
      </View>
      <View style={Styles.textContainer}>
        <Text>
          {props.team + " "}
        </Text>
        <Text>
          {props.position + " | "}
        </Text>
        <Text>
          {props.name}
        </Text>
      </View>
    </View>
  );
}

export default function CardsDisplay (props){

  var cardsDisplay = [];
  var image = require('../../Data/PlayerIcons/General/no_Icon.png')
  for(var i in props.players) {
    var player = props.players[i]["firstName"] + " " + props.players[i]["lastName"];
    image = setImage(player)
    cardsDisplay.push(<Card
                            key={i}
                            image={image}
                            name={player}
                            team={props.players[i]["team"]}
                            position={props.players[i]["position"]}
                      />);
  }
  return(
    <View style={Styles.CardsDisplay}>
      {cardsDisplay}
    </View>
  );
}
