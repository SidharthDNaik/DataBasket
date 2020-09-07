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
  HomeView: {
    flex: 1,
    margin: 10,
  },
  HomeCard: {
    flex:1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.2)"
  },
});
