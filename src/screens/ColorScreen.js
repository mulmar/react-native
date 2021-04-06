import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
    <View>
        <Button 
            title="select color" 
            onPress={() => {
            setColors([...colors, randomRgb()])
            }}
        />
       <FlatList 
           keyExtractor={(item) => item}
           data={colors} 
           renderItem={({item}) => {
               return <View style={{width: 100, height: 100, backgroundColor: item}}></View>
           }} 
       />
     </View>

    );
  };
  
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`

}

  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 40
    }
  });
  
  export default ColorScreen;
