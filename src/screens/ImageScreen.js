import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {

  return (
    <View>
     <ImageDetail Title={"beach"} imageSource={require('../../assets/beach.jpg')}/>
     <ImageDetail Title={"forest"} imageSource={require('../../assets/forest.jpg')}/>
     <ImageDetail Title={"mountain"} imageSource={require('../../assets/mountain.jpg')}/>
    </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});

export default ImageScreen;