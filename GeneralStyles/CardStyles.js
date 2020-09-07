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
   CardsDisplay: {
     top: 2,
     flex:1,
     borderWidth: 1,
     borderColor: "rgba(0,0,0,.2)",
     borderRadius: 5,
   },
   Card: {
     height: 100,
     borderWidth: 1,
     borderColor: "rgba(0,0,0,.2)",
     borderRadius: 5,
     margin: 2,
     flexDirection: "row"
   },
   CardIcon: {
     width: 160,
     height:97,
   }
 });
