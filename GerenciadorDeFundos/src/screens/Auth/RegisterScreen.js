import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, {useState} from  'react';
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Register } from "../../services/api/apiRoutes";

const RegisterScreen = () => {
    const [user, setUser] = useState({userEmail:'', userPassword:'', userCPassword:'', userName:''})
    const ValidateRegister = (user) =>{
        
      if (user.userCPassword !== user.userPassword) {
        console.log("Senhas nao sao iguais");
        return;
    }

    if (!user.userName || !user.userEmail || !user.userPassword) {
        console.log("Preencha todos os campos obrigatórios");
        return;
    }

    console.log("Dados de registro:", user); 
    Register(user);

    }
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={600}
        style={styles.containerHeader}
      >
        <Text style={styles.headerText}>Registrar</Text>
      </Animatable.View>

      <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={500}>
        <Text style={styles.inputTitle}>Nome</Text>
        <TextInput placeholder="Digite seu nome..." style={styles.input}value={user.userName} onChangeText={(value)=>setUser({...user, userName:value})} />
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput placeholder="Digite seu e-mail..." style={styles.input}value={user.userEmail} onChangeText={(value)=>setUser({...user, userEmail:value})} />
        <Text style={styles.inputTitle}>Senha</Text>
        <TextInput placeholder="Digite sua senha..." style={styles.input} secureTextEntry={true} value={user.userPassword} onChangeText={(value)=>setUser({...user, userPassword:value})}/>
        <Text style={styles.inputTitle}>Confirmar senha</Text>
        <TextInput
          placeholder="Confirme sua senha..."
          style={styles.input}
          secureTextEntry={true}
          value={user.userCPassword} onChangeText={(value)=>setUser({...user, userCPassword:value})}
        />
        <TouchableOpacity style={styles.button}
        onPress={()=>{
            ValidateRegister(user);
        }}>
          <Text style={styles.buttonText}>Registrar</Text>
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
    flex: 1,
    backgroundColor: "#1D1D1D",
    justifyContent: "center",
  },
  containerForm: {
    flex: 3,
    backgroundColor: "#CDCDCD",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "space-around",
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
    alignSelf:'center',
    fontWeight: "bold",
    fontSize: 30,
    color: "#CDCDCD",
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

export default RegisterScreen;
