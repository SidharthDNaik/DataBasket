import React, {useState} from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Styles from '../../GeneralStyles/CardStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';

const CardText = (props) => {
  var display = []
  var cardText = props.textDisplay
  for (var i =0; i < cardText.length; i++){
    display.push(
      <Text key={i}>
        {cardText[i]}
      </Text>
    );
  }
  return(
    <View style={{flexDirection: "row"}}>
      {display}
    </View>
  )
}

const Card = (props) => {
    if(! props.default){
      if(props.feed == "players"){
        return(
          <View style={Styles.Card}>
            <TouchableOpacity
              style={Styles.iconContainer}
              onPress={props.onPress}
              >
              <View style={{padding: 5}}>
                <Image style={Styles.CardIcon}
                       source={{uri: props.imageUrl}}/>
              </View>
              <View style={Styles.textContainer}>
                <CardText textDisplay={props.cardText}/>
              </View>
            </TouchableOpacity>
          </View>
        );
      }
      else {
        return(
          <View style={Styles.Card}>
            <TouchableOpacity
              style={Styles.iconContainer}
              onPress={props.onPress}
              >
              <View>
                <Image style={Styles.teamCardIcon}
                       source={{uri: props.imageUrl}}/>
              </View>
              <View style={Styles.textContainer}>
                <CardText textDisplay={props.cardText}/>
              </View>
            </TouchableOpacity>
          </View>
        );
      }
    }
    return(
      <View style={Styles.Card}>
        <TouchableOpacity
          style={Styles.addIconContainer}
          onPress={props.onPress}
          >
          <View style={{paddingRight: 2}}>
            <FontAwesomeIcon icon={faPlusSquare}
                             size={30}
             />
          </View>
          <View style={Styles.textContainer}>
            <CardText textDisplay={props.cardText}/>
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default function CardsDisplay (props){
  var cardsDisplay = [];
  var feed = props.feed
  var feedDisplay=props.feedDisplay
  if(feed == "player"){
    for(var i in feedDisplay) {
      var player = feedDisplay[i]["firstName"] + " " + feedDisplay[i]["lastName"];
      var imageUrl = "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/" + feedDisplay[i]["plyn"] +".png"
      var cardText = [feedDisplay[i]["team"] + " ", feedDisplay[i]["position"] + " | ", player ]
      cardsDisplay.push(<Card
                              key={i}
                              imageUrl={imageUrl}
                              cardText={cardText}
                              default={false}
                              feed={"players"}
                        />);
                      }
  } else {
    for(var i in feedDisplay) {
      var team = feedDisplay[i]["teamName"]
      var imageUrl = "http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2F" + feedDisplay[i]["shrt"] +".png"
      var cardText = [feedDisplay[i]["city"] + " - ", feedDisplay[i]["teamName"]]
      cardsDisplay.push(<Card
                              key={i}
                              imageUrl={imageUrl}
                              cardText={cardText}
                              default={false}
                              feed={"teams"}
                        />);
                      }
  }
  var cardText = ["add a " + feed]
  cardsDisplay.push(<Card
                            key={-1}
                            cardText={cardText}
                            default={true}
                      />

                  )
    return(
      <View style={Styles.CardsDisplay}>
        {cardsDisplay}
      </View>
    );
}
