import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../../GeneralStyles/NavStyles'

const NavPanel = (props) => {
  return(
    <TouchableOpacity
      style={styles.NavPanel}
    >
      <Text>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

export default function DisplayNavigator(props) {
  var panels = [];
  for(var i = 0; i < props.names.length; i++){
    panels.push(<NavPanel name={props.names[i]}/>)
  }
  return(
    <View style={{flexDirection: "row"}}>
      {panels}
    </View>
  );
}
