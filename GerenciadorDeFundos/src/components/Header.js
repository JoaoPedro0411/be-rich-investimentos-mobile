import React from "react";
import { View, Text, StyleSheet,} from "react-native";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigation } from "@react-navigation/native";

const Header = () => {
  return <View style={styles.container}>
    <Text style={styles.headerText} >
        BeRich
    </Text>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop:35,
    // borderColor:'white', borderWidth:1 ,
    backgroundColor: "#1D1D1D",
    height: 50,
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
    paddingStart: 15,
  },
});
export default Header;