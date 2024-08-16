import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const WorkerProfile = ({ profileIcon, name, flagIcon }) => {
  return (
    <View style={styles.profileContainer}>
      {/* <Icon name={profileIcon} size={80} color="#333" /> */}
      <Image source={profileIcon} style={styles.profileIconStyle} />
      <Text style={styles.name}>{name}</Text>
      {/* <Icon name={flagIcon} size={30} color="#333" style={styles.flagIcon} /> */}
      <Image
        source={{ uri: flagIcon }}
        contentFit="contain"
        style={styles.flagIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    margin: 5,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileIconStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  flagIcon: {
    position: "absolute",
    top: -10,
    right: -10,
    height: 26,
    width: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WorkerProfile;
