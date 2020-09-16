import React, {useState} from 'react';
import { Text, View, ScrollView } from 'react-native';
import Styles from '../GeneralStyles/HomeStyles'
import DisplayNavigator from '../Components/Navigators/DisplayNavigator'
import CardsDisplay from '../Components/Cards/CardsDisplay';

export default function Home(props) {

  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState('');

  const fetchData = () => {
    fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/17", {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    		"x-rapidapi-key": "87999c701bmshe346a79cb0bb547p19402ejsn125001a1c097"
    	}
    })
    .then(response => {
    	console.log(response);
    })
    .catch(err => {
    	console.log(err);
    });
  }

  var dNavNames = ["Players", "Teams"];
  var players = {
                "0": {
                        "firstName": "Lebron",
                        "lastName": "James",
                        "position": "F",
                        "jersey": "23",
                        "team": "Lakers"
                      },
                 "1": {
                        "firstName": "Anthony",
                        "lastName": "Davis",
                        "position": "PF",
                        "jersey": "3",
                        "team": "Lakers"
                 }
                }

  return (
    <View style={Styles.HomeView}>
      <View style={Styles.HomeCard}>
        <View style={Styles.HomeCardsHeader}>
          <DisplayNavigator names={dNavNames}/>
        </View>
        <ScrollView>
          <CardsDisplay players={players}/>
        </ScrollView>
      </View>
    </View>
  );
}
