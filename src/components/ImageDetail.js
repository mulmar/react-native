import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const ImageDetail = (props) => {

  return (
    <View>
      <Image source={props.imageSource}/>
      <Text>{props.Title}</Text>
    </View>)
};


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});

export default ImageDetail;