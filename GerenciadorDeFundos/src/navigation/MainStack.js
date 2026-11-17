import React from "react";
import { View, ActivityIndicator } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import GitHubAuthScreen from "../screens/Auth/GitHubAuthScreen";
import UserDashboardScreen from "../screens/Home/UserDashboardScreen";

import { useAuth } from "../context/AuthContext";

const Stack = createStackNavigator();

const MainStack = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Stack.Navigator
      initialRouteName={user ? "userDashBoardScreen" : "home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="gitAuth" component={GitHubAuthScreen} />
      <Stack.Screen name="userDashboardScreen"component={UserDashboardScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
