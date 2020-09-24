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
     borderColor: "rgba(0,0,0,.2)",
     borderRadius: 5,
     margin: 2,
     flexDirection: "row",
     alignItems: "center",
     marginBottom: 10
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
   },
   defaultImage: {
     width: 50,
     height: 50,
   },
   iconContainer: {
     flex:1,
     paddingTop: 10,
     paddingBottom: 10,
     marginLeft: 5,
     marginRight: 5,
     paddingLeft: 2,
     borderTopWidth: 1,
     borderBottomWidth: 1,
     flexDirection: "row",
     borderColor: "rgba(0,0,0,.2)",
   },
   addIconContainer: {
     flex:1,
     paddingTop: 10,
     paddingBottom: 10,
     marginLeft: 5,
     marginRight: 5,
     paddingLeft: 2,
     borderTopWidth: 1,
     borderBottomWidth: 1,
     flexDirection: "row",
     borderColor: "rgba(0,0,0,.2)",
     alignItems: "center",
     justifyContent: "center"
   },
   teamCardIcon: {
     width: 110,
     height: 110,
     borderColor: "rgba(0,0,0,.2)",
   },
   teamImage:{
     width: 75,
     height: 75,
   }
 });
