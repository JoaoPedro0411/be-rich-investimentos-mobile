import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { useAuth } from '../../context/AuthContext';


const LoginScreen = () => {
  const {signIn} = useAuth();
  const [user, setUser] = useState({ userEmail: "", userPassword: "" });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.headerText}>Bem vindo!</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation="fadeInUp">
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          placeholder="Digite seu e-mail..."
          style={styles.input}
          value={user.userEmail}
          onChangeText={(value) => setUser({ ...user, userEmail: value })}
        />
        <Text style={styles.inputTitle}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha..."
          style={styles.input}
          value={user.userPassword}
          onChangeText={(value) => setUser({ ...user, userPassword: value })}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log(user);
            signIn(user);
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("gitAuth")}>
          <Text style={styles.buttonText}>Entrar com GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.buttonTextRegister}>
            Nao tem conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1D1D",
  },
  containerHeader: {
    flex: 2,
    backgroundColor: "#1D1D1D",
    justifyContent: "center",
  },
  containerForm: {
    flex: 3,
    backgroundColor: "#CDCDCD",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#1E1E1E",
    borderRadius: 50,
    alignSelf: "center",
    paddingVertical: 8,
    width: "60%",

    alignItems: "center",
  },
  buttonText: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  headerText: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#CDCDCD",
    marginStart: "10%",
    top: "10%",
  },
  inputTitle: {
    alignSelf: "flex-start",
    marginLeft: "10%",
    fontSize: 20,
    marginBottom: 2,
  },
  input: {
    borderBottomWidth: 3,
    width: "80%",
    paddingVertical: 6,
    marginEnd: "5%",
    marginTop: 0,
  },
});

export default LoginScreen;
