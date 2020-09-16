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
     height: deviceHeight,
   },
   Card: {
     height: 125,
     borderWidth: 1,
     borderColor: "rgba(0,0,0,.2)",
     borderRadius: 5,
     margin: 2,
     flexDirection: "row",
     alignItems: "center"
   },
   CardIcon: {
     width: 100,
     height: 100,
     borderRadius: 50,
     borderWidth: 1,
   },
   textContainer: {
     padding: 5,
     flexDirection: "row",
     alignItems: "center",
   },
   textStyle: {
     fontSize: 20,
   }
 });
