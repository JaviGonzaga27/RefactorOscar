import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View>
      
      <Image source={require('../../assets/images/IniciHome.png')}
     style={styles.ImageHome}/>
    
    </View>
  )
}
const styles = StyleSheet.create({
  ImageHome:{
      
      width:920,
      heigth:10,
      marginTop:10
  }

})