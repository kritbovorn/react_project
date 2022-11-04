import React, { Fragment } from "react";
import {StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native'

const App = () => {
  const red = "#EC1B25";
  // const red = "green";
  return (
  
    
      <SafeAreaView style={{flex: 1, backgroundColor: red }}>
        <StatusBar barStyle={"light-content"}/>

         <View style={{flex: 1,backgroundColor: "black"}}></View>

       


      </SafeAreaView>
    
  );
}

export default App;