import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../utils/Colors'
//import { AntDesign } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
export default function Login() {
  
    const onPressCurse=(HomeScreen)=>{
        console.log('HomeScreen',HomeScreen)
    };
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken, setAccessToken]= React.useState(null);
    const [userInfo, setUserInfo] = React.useState(null);
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        expoClientId:'278500822059-cfsdc9b0ig9upkh6r0f4apm4l059dll3.apps.googleusercontent.com',
        androidClientId:"278500822059-cfsdc9b0ig9upkh6r0f4apm4l059dll3.apps.googleusercontent.com",
        
    });
    React.useEffect(()=>{
        if(response?.type ==="success"){
            setAccessToken(response.authentication.accessToken);
        } 
    },[]);
    
async function fetchUserInfo(){
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers:{Authorizacion: `Bearer ${accessToken}`}
    });
    const userInfo = await response.json();
    setUserInfo(userInfo);
    };

    //const getUserData = async ()=>{
      //  let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me",{
        //    headers:{Authorization:  `Bearer ${accessToken}`}
        //});
        //userInfoResponse.json().then(data =>{
          //  setUserInfo(data);
       // });

    //const getLocalUser = async () => {
      // const data = await AsyncStorage.getItem("@user");
        //if (!data) return null;
        //return JSON.parse(data);
      //};

  return (
    <View style={{alignItems:'center'}}>
        <Image source={require('../../assets/images/log.png')}
        style={styles.LoginImage}/>
        <View style={styles.subContainer}>
            
            <Text style={{fontSize:30,color:Colors.WHITE,textAlign:'center',marginTop:50}}>
            Bienvenido a la aplicación Educativa
            </Text>
            <Text style={{fontSize:30,color:Colors.YELLOW,textAlign:'center',marginTop:10}}>
              Python Basics</Text>
            <TouchableOpacity style={styles.button} 
            onPress={accessToken ? getUserData:()=> promptAsync ({useProxy:true, showInRecents:true})}>
                
                <Text style={{textAlign:'center',fontSize:24,
            color:Colors.PRIMARY,fontWeight:'bold'}}>Sign In with Google</Text>
            </TouchableOpacity>
            <View style={styles.Pielogin}>
                <Text style={{fontSize:22,color:Colors.WHITE,marginTop:3}}>
                >>> <Text style={{color:Colors.BLUE}}>
                print</Text><Text style={{color:Colors.WHITE}}>
                (<Text style={{color:Colors.YELLOW}}>
                "¡Hola, Mundo!"<Text style={{color:Colors.WHITE}}>
                )</Text></Text></Text></Text><Text style={{fontSize:22,color:Colors.WHITE,marginTop:1}}>
                ¡Hola, Mundo!</Text></View>
                
        </View>
        </View>
  )
}

const styles = StyleSheet.create({
    LoginImage:{
        
        width:320,
        heigth:450,
        marginTop:190
    },
    subContainer:{
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        height:'60%',
        marginTop:110,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    button:{
        padding:20,
        backgroundColor:Colors.YELLOW,
        borderRadius:99,
        marginTop:60,
        marginLeft:50,
        marginRight:50,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'  ,
        alignItems:'center'      
    },
    Pielogin:{
        marginTop:40,
        marginLeft:90,
        width:'60%',
        backgroundColor:Colors.BLACK,
        height:'11%',
        
    }
})