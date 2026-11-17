import React ,{useState, useEffect}from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { useAuth } from "../context/AuthContext";
import {findUser} from "../services/api/apiRoutes"
const UserBasicInfo = () => {
  const {user} = useAuth();

  const [userData, setUserData] = useState({});

  

  useEffect(() => {
    
    const fetchUser = async () => {
      try {
        const userData = await findUser(user.userId);
        setUserData(userData);
        console.log(userData)
      } catch (error) {
        console.error("Erro ao buscar usuário", error);
      }
    };

    if (user.userId) {
      fetchUser();
    }
  }, [user.userId]);



  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Saldo Livre</Text>
        <Text style={styles.balanceAmount}>R$ {userData.userBalance}</Text>
        <Text style={styles.balanceTitle}>Valor investido</Text>
        <Text style={styles.balanceAmount}>R$ 550.089,00</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Avatar.Icon size={130} icon="account" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 380,
    backgroundColor: "#565656",
    borderRadius: 15,
    marginVertical: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap:50
  },
  balanceContainer: {

    flex: 1,
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  balanceTitle: {
    align: "flex-start",
    color: "white",
    fontSize: 18,
    marginBottom: 5,
  },
  balanceAmount: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default UserBasicInfo;
