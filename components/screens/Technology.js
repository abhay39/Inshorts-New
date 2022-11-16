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

const Technology = () => {
    const [results, setResults] = useState('');

    const navigation=useNavigation()

  useLayoutEffect(()=>{
    fetchAPI()
  },[fetchAPI])

  const fetchAPI = () => {
    fetch("https://inshorts.deta.dev/news?category=technology")
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
              resizeMode: "center",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: -10,
              height: 260,
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
            {title}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "400",
              textAlign: "center",
              color: "black"
            }}
          >
            {content?.slice(0,250)}..more
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
                
                fontSize: 19,
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
                
                fontSize: 18,
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

export default Technology

const styles = StyleSheet.create({})