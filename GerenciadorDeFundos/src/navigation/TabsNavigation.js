import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen name="HomeTab" component={HomeTab} options={{ title: "Início" }} />
      <Tab.Screen name="ProfileTab" component={ProfileTab} options={{ title: "Perfil" }} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
