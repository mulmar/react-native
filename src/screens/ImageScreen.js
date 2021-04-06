import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {

  return (
    <View>
     <ImageDetail Title={"Jent"} imageSource={require('../../assets/jent.jpg')} imageScore={9}/>
     <ImageDetail Title={"beach"} imageSource={require('../../assets/beach.jpg')} imageScore={8}/>
     <ImageDetail Title={"forest"} imageSource={require('../../assets/forest.jpg')} imageScore={7}/>
     <ImageDetail Title={"mountain"} imageSource={require('../../assets/mountain.jpg')} imageScore={6}/>
    </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});

export default ImageScreen;