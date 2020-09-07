import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function TouchableIcon(props) {

  var onPress = props.onPress;

  if (onPress.localeCompare("Nav") == 0) {
    const navigation = useNavigation();
    onPress = () => {
     navigation.navigate(props.Screen)
   }
  }

  return (
    <View style={{alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <TouchableOpacity style={{right: 15, alignItems: "center", justifyContent: "center", flexDirection: "column"}}
                        onPress={onPress}
      >
        <FontAwesomeIcon icon={props.Icon}
                         size={props.IconSize}
        />
        <Text>{props.IconText}</Text>
      </TouchableOpacity>
    </View>
  );
}
