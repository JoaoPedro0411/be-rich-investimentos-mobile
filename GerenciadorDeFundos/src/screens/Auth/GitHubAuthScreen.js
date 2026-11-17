import React from "react";
import { WebView } from "react-native-webview";
import { useAuth } from "../../context/AuthContext";


const GitHubAuthScreen = ({ navigation }) => {

  const { gitHubSignIn} = useAuth();
  const authUrl = "http://52.21.142.201:6969/auth/github/login";

  return (
    <WebView
      source={{ uri: authUrl }}
      onMessage={(event) => {
        const data = JSON.parse(event.nativeEvent.data);

        console.log("Dados recebidos:", data);
        gitHubSignIn(data);
        navigation.reset({
          index: 0,
          routes: [{ name: "userDashboardScreen" }],
        });
      }}
    />
  );
};

export default GitHubAuthScreen;
