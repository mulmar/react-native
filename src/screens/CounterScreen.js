import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = ({navigation}) => {
    const myName = "Martin";
    const [counter, setCounter] = useState(0);
    return (
    <View>
      <Button 
        onPress={() => {
          setCounter(counter + 1)}}
        title="Increase" />
     <Button 
        onPress={() => {
          setCounter(counter - 1)}}
        title="Decrease" />
        <Text style={styles.textStyle}>Counter value:{counter}</Text>
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
