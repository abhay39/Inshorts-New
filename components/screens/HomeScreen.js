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

const HomeScreen = () => {
  const [results, setResults] = useState('');

    const navigation=useNavigation()

  useLayoutEffect(()=>{
    fetchAPI()
  },[fetchAPI])

  const fetchAPI = () => {
    fetch("https://inshorts.deta.dev/news?category=all")
      .then(response => response.json())
      .then(response => {
        // setTotalValues(response.articles)
        // console.log(response.data[0].author);
        setResults(response.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <View style={{backgroundColor:'#2c2c6c',height:'100%',flex:1}}>
        
        <ScrollView>
        <Text style={{
                fontSize:30,fontWeight:'bold',color:'white',marginLeft:20,
            }}>Select Your News Type</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5,marginBottom:10
        }}
        onPress={()=>navigation.push('All')}
        > 
            <Image source={{uri:'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/cricket-sports-batsman-batting-india_MkgaLD8O_SB_PM.jpg'}} style={{
                
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:30,fontWeight:'bold',color:'black'
            }}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5
        }}
        onPress={()=>navigation.push('Technology')}
        > 
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/4257/4257487.png'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:26,fontWeight:'bold',color:'black'
            }}>Technology</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5,marginBottom:10
        }}
        onPress={()=>navigation.push('Business')}
        > 
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1933/1933920.png'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:30,fontWeight:'bold',color:'black'
            }}>Business</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5
        }}
        onPress={()=>navigation.push('Science')}
        > 
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/5205/5205074.png'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:30,fontWeight:'bold',color:'black'
            }}>Science</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5,marginBottom:10
        }}
        
        onPress={()=>navigation.push('World')}> 
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/7/71/Earth_icon_2.png'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:30,fontWeight:'bold',color:'black'
            }}>World</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5
        }}
        
        onPress={()=>navigation.push('Politics')}> 
            <Image source={{uri:'https://banner2.cleanpng.com/20180425/rqw/kisspng-united-states-computer-icons-government-building-o-5ae0802903c0b0.0211376415246623130154.jpg'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:30,fontWeight:'bold',color:'black'
            }}>Politics</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5,marginBottom:10
        }}
        onPress={()=>navigation.push('Startup')}
        > 
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/167/167490.png'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:30,fontWeight:'bold',color:'black'
            }}>Startup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5
        }}
        onPress={()=>navigation.push('Entertainment')}
        > 
            <Image source={{uri:'http://cdn.onlinewebfonts.com/svg/img_497562.png'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:20,fontWeight:'bold',color:'black'
            }}>Entertainment</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5,marginBottom:10
        }}
        onPress={()=>navigation.push('Miscellaneous')}
        > 
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/5485/5485853.png'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:20,fontWeight:'bold',color:'black'
            }}>Miscellaneous</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5
        }}
        onPress={()=>navigation.push('Hakte')}
        > 
            <Image source={{uri:'https://play-lh.googleusercontent.com/59-B-_ZEximSrUX2Qz4S1tt5d5wVQfOURt2hkecaKvKDDEvUqRjNukMszcemTNKc2Ks=w240-h480-rw'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:28,fontWeight:'500',color:'black'
            }}>Hatke</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5,marginBottom:10
        }}
        onPress={()=>navigation.push('Automobile')}
        > 
            <Image source={{uri:'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/8076/1601635839903/front-left-side-47.jpg'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:27,fontWeight:'bold',color:'black'
            }}>Automobile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            height:150,backgroundColor:'white',marginTop:10,width:150,marginLeft:20,marginRight:20,borderRadius:20,justifyContent:'center',alignItems:'center',padding:5
        }}
        onPress={()=>navigation.push('National')}
        > 
            <Image source={{uri:'https://i.pinimg.com/736x/5c/3a/ba/5c3aba84722ec4af12af3536bb21c079.jpg'}} style={{
                resizeMode:'contain',height:100,width:100,
            }}/>
            <Text style={{
                fontSize:28,fontWeight:'500',color:'black'
            }}>National</Text>
        </TouchableOpacity>
      </View>
      <Text style={{
                fontSize:30,fontWeight:'bold',color:'white',marginLeft:20,
            }}>Latest News</Text>
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
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
