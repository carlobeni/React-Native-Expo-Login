import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

//Login with Firebase
import {auth} from "./config/firebase" 
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {GoogleAuthProvider,onAuthStateChanged,signInAnonymously, signInWithCredential} from "firebase/auth"
import { useEffect, useState } from 'react';

WebBrowser.maybeCompleteAuthSession();

const Stack = createNativeStackNavigator();
export default function App() {
  const [userInfo, setUserInfo] = useState('');
  const [request,responce,promptAsync] = Google.useAuthRequest({
    iosClientId:"",
    androidCliendId:"872260238894-f7nf4g0noqpmaip2fg3iskralurojgaq.apps.googleusercontent.com"
  })

  useEffect(()=>{
    if(responce?.type=="success"){
      const {id_token}=responce.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth,credential);
    }
  },[responce])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" promptAsync={promptAsync} component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
