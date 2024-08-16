import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "../../common/Header";
import WorkerGrid from "../../common/WorkerGrid";
import { workerProfileData } from "../../../utils/mockData/workerProfileData";

const CategoryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredWorkers, setFilteredWorkers] = useState(workerProfileData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterWorkers(category, searchQuery);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterWorkers(selectedCategory, query);
  };

  const filterWorkers = (category, query) => {
    let filteredData = workerProfileData;

    if (category && category !== "All") {
      filteredData = filteredData.filter((worker) =>
        worker.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (query) {
      filteredData = filteredData.filter((worker) =>
        worker.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredWorkers(filteredData);
  };

  return (
    <View style={styles.container}>
      <Header
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        onSearch={handleSearch}
      />
      <WorkerGrid workers={filteredWorkers} />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
