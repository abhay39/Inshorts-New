import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const FullNews = ({route}) => {
  let url=route.params.paramKey;
    // console.log(url)
  return (
    <WebView source={{ uri: url }} />
  )
}

export default FullNews

const styles = StyleSheet.create({})