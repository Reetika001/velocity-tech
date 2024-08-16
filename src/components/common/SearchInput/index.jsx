import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchInput = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#333" />
        <TextInput
          placeholder="Search workers by name"
          style={styles.input}
          onChangeText={(text) => onSearch(text)}
        />
        <Icon name="mic" size={20} color="#333" />
      </View>
      <TouchableOpacity style={styles.settingsButton}>
        <Icon name="settings" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  settingsButton: {
    marginLeft: 10,
    backgroundColor: "#f0f0f0",
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});
