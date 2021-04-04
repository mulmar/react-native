import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const myName = "Martin";
    return (
    <View>
      <Text style={styles.textStyle}>Hello Mila</Text>
      <Text style={styles.subHeader}>Hello my name is {myName}!</Text>
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
  
  export default ComponentsScreen;
