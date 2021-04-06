import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Jent #1', age: 10 },
        { name: 'Mila #2', age: 12 },
        { name: 'Danny #3', age: 43 },
        { name: 'Friend #4', age: 24 },
        { name: 'Friend #5', age: 25 },
        { name: 'Friend #6', age: 26 },
        { name: 'Friend #7', age: 27 },
        { name: 'Friend #8', age: 28 },
        { name: 'Friend #9', age: 29 }
    ];
    
    return (<View>
      <FlatList 
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         keyExtractor = {friend => friend.name}   
         data={friends} 
         renderItem={({item}) =>{
             return <Text style={styles.textStyle}>{item.name}</Text>
         }}/>
      <FlatList 
         horizontal={false}
         showsHorizontalScrollIndicator={false}
         keyExtractor = {friend => friend.name}   
         data={friends} 
         renderItem={({item}) =>{
             return <Text 
                    style={styles.textStyle}>{item.name} - Age:{item.age}
                </Text>   
         }}/>         
      </View>   
    );
  };
  
  const styles = StyleSheet.create({
    textStyle: {
      marginVertical: 20,
      marginHorizontal : 20
    }
  });
  
  export default ListScreen;
