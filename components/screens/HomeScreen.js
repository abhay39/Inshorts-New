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

const cate=[
  {
    id:1,
    nameOf:"All",
    image:"https://i.pinimg.com/originals/a4/6b/c7/a46bc7ebc0f4c4b94b4df86305e4cfbf.png",
    description:"All",
  },
  {
    id:2,
    nameOf:"Technology",
    image:"https://www.pngfind.com/pngs/m/44-446958_tech-icon-information-technology-icon-png-transparent-png.png",
    description:"Technology",
  },
  {
    id:3,
    nameOf:"Business",
    image:"https://cdn-icons-png.flaticon.com/512/1933/1933920.png",
    description:"Business",
  },
  {
    id:4,
    nameOf:"Science",
    image:"https://cdn-icons-png.flaticon.com/512/5205/5205074.png",
    description:"Science",
  },
  {
    id:5,
    nameOf:"National",
    image:"https://i.pinimg.com/736x/5c/3a/ba/5c3aba84722ec4af12af3536bb21c079.jpg",
    description:"National",
  },
  {
    id:6,
    nameOf:"Politics",
    image:"https://banner2.cleanpng.com/20180425/rqw/kisspng-united-states-computer-icons-government-building-o-5ae0802903c0b0.0211376415246623130154.jpg",
    description:"Politics",
  },
  {
    id:7,
    nameOf:"Startup",
    image:"https://cdn-icons-png.flaticon.com/512/167/167490.png",
    description:"Startup",
  },
  {
    id:8,
    nameOf:"Entertain",
    image:"http://cdn.onlinewebfonts.com/svg/img_497562.png",
    description:"Entertainment",
  },
  {
    id:9,
    nameOf:"Miscellaneous",
    image:"https://cdn-icons-png.flaticon.com/512/5485/5485853.png",
    description:"Miscellaneous",
  },
  {
    id:10,
    nameOf:"Hatke",
    image:"https://play-lh.googleusercontent.com/59-B-_ZEximSrUX2Qz4S1tt5d5wVQfOURt2hkecaKvKDDEvUqRjNukMszcemTNKc2Ks=w240-h480-rw",
    description:"Hatke",
  },
  {
    id:11,
    nameOf:"Automobile",
    image:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/8076/1601635839903/front-left-side-47.jpg",
    description:"Automobile",
  },
  {
    id:12,
    nameOf:"World",
    image:"https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png",
    description:"World",
  },
]

const HomeScreen = () => {
  const [results, setResults] = useState('');

    const navigation=useNavigation()

  useLayoutEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = () => {
    fetch("https://inshorts.deta.dev/news?category=all")
      .then(response => response.json())
      .then(response => {
        
        setResults(response.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <View style={{backgroundColor:'#2c2c6c',height:'100%',flex:1}}>
        <View style={{margin:10, flexDirection:'row',justifyContent:'space-around'}}>
           <FlatList 
              horizontal
              showsHorizontalScrollIndicator={false}
                data={cate}
                renderItem={({item:{id,image,description,nameOf},item})=>{
                  return(
                    <View style={{alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity  style={{
                      margin:10,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5,
                      borderWidth:3, borderColor:'red',borderRadius:155,
                  }}
                  onPress={()=>navigation.push(description)}
                  > 
                      <Image source={{uri:image}} style={{
                          resizeMode:'contain',height:55,width:55,borderRadius:35
                      }}/>
                  </TouchableOpacity>
                      <Text style={{
                          fontSize:18,fontWeight:'bold',color:'white'
                      }}>{nameOf}</Text>
                      </View>
                  )
                }}
              />
        
      </View>
      <Text style={{
                fontSize:30,fontWeight:'bold',color:'white',marginLeft:20,
            }}>Latest News</Text>
      <FlatList 
        data={results}
        
        showsVerticalScrollIndicator={false}
        renderItem={({item:{title,content,author,publishedAt},item})=>{
            return(
                <TouchableOpacity
          style={{
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
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
