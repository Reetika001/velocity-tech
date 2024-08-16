import React from "react";
import { FlatList, StyleSheet } from "react-native";
import WorkerProfile from "../WorkerProfile";

const WorkerGrid = ({ workers }) => {
  const renderItem = ({ item }) => (
    <WorkerProfile
      profileIcon={item.profileIcon}
      name={item.name}
      flagIcon={item.flagIcon}
    />
  );

  return (
    <FlatList
      data={workers}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={4}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    justifyContent: "space-between",
  },
});

export default WorkerGrid;
