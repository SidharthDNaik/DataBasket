import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../../GeneralStyles/NavStyles'

const NavPanel = (props) => {
  if (props.val % 2 == 0){
    return(
      <TouchableOpacity
        style={styles.NavPanel2}
        onPress={() => {
            props.onPress(props.name)
          }
        }
      >
        <Text>
          {props.name}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return(
      <TouchableOpacity
        style={styles.NavPanel}
        onPress={() => {
            props.onPress(props.name)
        }}
      >
        <Text>
          {props.name}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default function DisplayNavigator(props) {
  var panels = [];
  for(var i = 0; i < props.names.length; i++){
    panels.push(<NavPanel
                            key={i}
                            name={props.names[i]}
                            val={i}
                            onPress={props.onPress}
                />)
  }
  return(
    <View style={{flexDirection: "row"}}>
      {panels}
    </View>
  );
}
