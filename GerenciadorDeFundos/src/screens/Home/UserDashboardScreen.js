import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import RingChart from "../../components/RingChart";
import Header from "../../components/Header";
import UserBasicInfo from "../../components/UserBasicInfo";


const UserDashboardScreen = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Header />
        <UserBasicInfo />
      </View>
      <View style={styles.bodyContainer}>

      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={signOut}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1D1D1D" , alignItems:'center'},


  

});
export default UserDashboardScreen;
