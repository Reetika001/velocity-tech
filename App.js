import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "./src/components/screens/ChatScreen";
import CallScreen from "./src/components/screens/CallScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from "./assets";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: () => {
              let iconName;

              if (route.name === "Chat") {
                iconName = Images.chat;
              } else if (route.name === "Call") {
                iconName = Images.call;
              }
              return (
                <Image
                  source={iconName}
                  style={{ height: 25, width: 25 }}
                  resizeMode="contain"
                />
              );
            },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "#000",
          })}
        >
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Call" component={CallScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
