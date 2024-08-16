import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import { workerCategory } from "../../../utils/mockData/workerCategory";
import SearchInput from "../SearchInput";

const Header = ({ onCategorySelect, selectedCategory, onSearch }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryContainer,
        {
          backgroundColor:
            item.Worker_Role === selectedCategory ? "#7c7c7c" : "transparent",
        },
      ]}
      onPress={() => onCategorySelect(item.Worker_Role)}
    >
      <Image source={item.icon} style={styles.categoryIcon} />
      <Text
        style={[
          styles.categoryText,
          {
            color: item.Worker_Role === selectedCategory ? "#fff" : "#7c7c7c",
          },
        ]}
      >
        {item.Worker_Role}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={workerCategory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      />
      <SearchInput onSearch={onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  carouselContainer: {
    backgroundColor: "#F5F5DC",
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  categoryIcon: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  categoryText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default Header;
