/*
Filename: GeneralStyles.js
Description: This file will be imported by our screens and buttons for
             general styling.
 */
 import React from 'react';
 import { Dimensions, StyleSheet } from 'react-native';

 var deviceHeight = Dimensions.get('window').height;
 var deviceWidth = Dimensions.get('window').width;

 export default StyleSheet.create({
   NavPanel: {
     top: 10,
     paddingTop: 5,
     paddingBottom: 5,
     paddingRight: 10,
     paddingLeft: 10,
     borderWidth: 1,
     borderColor: "black",
   },
   NavPanel2: {
     top: 10,
     paddingTop: 5,
     paddingBottom: 5,
     paddingRight: 10,
     paddingLeft: 10,
     borderBottomWidth: 1,
     borderTopWidth: 1,
     borderLeftWidth: 1,
     borderColor: "black",
   },
 });
