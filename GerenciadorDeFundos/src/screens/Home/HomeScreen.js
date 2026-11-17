
import React from "react";
import * as Animatable from "react-native-animatable"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animatable.Image
        animation='flipInY'
        delay={200}
        source={require('../../../assets/B.png')}
        style={{width:'100%'}}
        resizeMode="contain"
        />
      </View>
      <Animatable.View 
        animation='fadeInUp'
        delay={800}
      style={styles.messageContainer}>
        <Text style={styles.messageTitle}>Enriqueça de forma rápida, fácil e sem riscos com o BeRich!</Text>
        <Text style={styles.messageText}>Faça o login para começar</Text>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate('login')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D1D",
    width: "100%",
  },
  logoContainer: {
    flex: 2,
  },
  messageContainer: {
    flex: 1,
    backgroundColor: "#CDCDCD",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  messageText: {
    fontSize:16,
    color: "#3B3B3B",
  },
  messageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  button: {
    position:'absolute',
    backgroundColor:'#1E1E1E',
    borderRadius:50,
    alignSelf:'center',
    paddingVertical:8,
    width:'60%',
    bottom:'15%',
    alignItems:'center'
  },
  buttonText: {
    alignItems:'center',
    fontWeight:'bold',
    fontSize:18,
    color:'#fff'
  },
});

export default HomeScreen;
