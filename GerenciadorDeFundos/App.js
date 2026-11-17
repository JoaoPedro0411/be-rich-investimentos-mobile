import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MainStack from "./src/navigation/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  
  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#1d1d1d" barStyle="light-content"  />
          <MainStack />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
