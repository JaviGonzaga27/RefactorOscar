import { View, Text, Button,Image, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '../../utils/Colors'
import GlobalApi from '../../utils/GlobalApi'
import Slider from '../../components/Slider'
import VideoCourseList from '../../components/VideoCourseList'
import CourseList from '../../components/CourseList'

export default function HomeScreen() {
  useEffect(()=>{
getSlider();
  },[])
  const getSlider=async()=>{
    const result=(await GlobalApi.getSlider()).data;
    console.log("Result",result)
  }
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.head}>
      <View>
      <Text style={{color:Colors.WHITE, fontSize:22}}> Hola!</Text>
      <Text style={{color:Colors.YELLOW, fontSize:30,fontWeight:'bold'}}> Usuario</Text>
      </View>
        <Image style={styles.avatar} source={{uri:'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'}}/>
      </View>   
       <Slider/>
       <VideoCourseList/> 
       <CourseList type={'basic'}/>
       
    </SafeAreaView>
   

  )
}
const styles = StyleSheet.create({
  ImageHome:{
      maxWidth:395,
      maxHeight:190,
      borderRadius:10
  },
  container:{
    flex:1,
    padding:15,
  },
  head:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: Colors.PRIMARY,
    borderRadius:12,
    marginBottom:20
  },
  avatar:{
    width:70,
    height:70,
    borderRadius:30,
  },
  
})
