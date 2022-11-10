import {
    FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Entertainment = () => {
    const [results, setResults] = useState('');

    const navigation=useNavigation()

  useLayoutEffect(()=>{
    fetchAPI()
  },[fetchAPI])

  const fetchAPI = () => {
    fetch("https://inshorts.deta.dev/news?category=entertainment")
      .then(response => response.json())
      .then(response => {
        setResults(response.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <View style={{backgroundColor:'#2c2c6c',height:'100%'}}>
    <FlatList 
        data={results}
        // horizontal
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item:{title,content,author,publishedAt},item})=>{
            return(
                <TouchableOpacity
          style={{
            // height:500,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 20,
            width: 370,
            marginLeft: 20,
            marginTop: 10,
            flex: 1,
            marginRight: 20,marginBottom:20
          }}
          onPress={() => navigation.push('FullNews',{
            paramKey:item.readMoreUrl
          })}
        >
          <Image
            source={{uri:item.imageUrl}}
            style={{
              resizeMode: "contain",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: -10,
              height: 250,
              width: 370,
              borderRadius: 20,
              marginTop: -10
            }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              color: "black",
              textAlign: "center"
            }}
          >
            {title?.slice(0,50)}..more
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "400",
              textAlign: "center",
              color: "black"
            }}
          >
            {content?.slice(0,150)}..more
          </Text>
          <View
            style={{
              flexDirection: "row",
              
              alignItems: "flex-start"
            }}
          >
            <Text
              style={{
                
                fontSize: 20,
                fontWeight: "500",
                color: "black",
                left: 10
              }}
            >
              by: {author}
            </Text>
            <Text
              style={{
                
                fontSize: 20,
                fontWeight: "500",
                color: "black",
                left: 50
              }}
            >
              
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              
              alignItems: "flex-start"
            }}
          >
            <Text
              style={{
                
                fontSize: 20,
                fontWeight: "500",
                color: "black",
                left: 10
              }}
            >
              Date: {item.date} {item.time}
            </Text>
            <Text
              style={{
               
                fontSize: 20,
                fontWeight: "300",
                color: "black",
                left: 150
              }}
            >
              
            </Text>
          </View>
        </TouchableOpacity>
            )
        }}
      />
      </View>
  )
}

export default Entertainment

const styles = StyleSheet.create({})