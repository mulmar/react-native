import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>Hallo Martin</Text>
         <Button 
            onPress={() => navigation.navigate('List')}
            title="Go to components demo" />
         <Button 
            onPress={() => navigation.navigate('Image')}
            title="Go to Image Screen" />
          <TouchableOpacity 
            onPress={() => navigation.navigate('Components')}>
            <Text style={styles.buttontext}>Goto List Demo</Text>
          </TouchableOpacity>
    </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  buttontext: {
    fontSize: 17,
    color: 'blue',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 8
  }
});

export default HomeScreen;