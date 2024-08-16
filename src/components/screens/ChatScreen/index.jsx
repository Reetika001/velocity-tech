import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WelcomeScreen from "../WelcomeScreen";
import CategoryScreen from "../CategoryScreen";

const Tab = createMaterialTopTabNavigator();

const ChatScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
    </Tab.Navigator>
  );
};

export default ChatScreen;
