import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = ({navigation}) => {
    const myName = "Martin";
    let teller = 0;
    return (
    <View>
      <Button 
        onPress={() => {
          teller++}}
        title="Increase" />
     <Button 
        onPress={() => {
          teller--}}
        title="Decrease" />
        <Text style={styles.textStyle}>Counter value:{teller}</Text>
     </View>
    );
  };
  
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 40
    },
    subHeader: {
      fontSize: 30,
      color: 'red'
    }
  });
  
  export default CounterScreen;
