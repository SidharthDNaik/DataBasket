import React, {useState} from 'react';
import { Text, View, ScrollView } from 'react-native';
import Styles from '../GeneralStyles/HomeStyles'
import DisplayNavigator from '../Components/Navigators/DisplayNavigator'
import CardsDisplay from '../Components/Cards/CardsDisplay';

export default function Home(props) {

  var dNavNames = ["Players", "Teams"];
  var players = {
                0: {
                        "firstName": "Lebron",
                        "lastName": "James",
                        "position": "F",
                        "jersey": "23",
                        "team": "Lakers",
                        "plyn": "1966"
                      },
                 1: {
                        "firstName": "Anthony",
                        "lastName": "Davis",
                        "position": "PF",
                        "jersey": "3",
                        "team": "Lakers",
                        "plyn": "6583"
                 }
                }
  var teams = {
                0:{
                  "teamName": "Lakers",
                  "city": "Los Angeles",
                  "shrt": "lal",
                },
                1:{
                  "teamName": "Knicks",
                  "city": "New York City",
                  "shrt": "nyk",
                },
                2:{
                  "teamName": "Clippers",
                  "city": "Los Angeles",
                  "shrt": "lac",
                },
                3:{
                  "teamName": "Nuggets",
                  "city": "Denver",
                  "shrt": "den",
                },
  }

  var player = {

  }

  var team = {

  }

  const [feed, setFeed] = useState('player');
  const [feedDisplay, setFeedDisplay] = useState(players)

  const changeFeed = (display) =>{
    if(display == "Players"){
      setFeed("player")
      setFeedDisplay(players)
    } else {
      setFeed("team")
      setFeedDisplay(teams)
    }
  }

  return (
    <View style={Styles.HomeView}>
      <View style={Styles.HomeCard}>
        <View style={Styles.HomeCardsHeader}>
          <DisplayNavigator
            names={dNavNames}
            onPress={(feed) =>{
              changeFeed(feed)
            }}
            />
        </View>
        <ScrollView>
          <CardsDisplay feedDisplay={feedDisplay} feed={feed}/>
        </ScrollView>
      </View>
    </View>
  );
}
