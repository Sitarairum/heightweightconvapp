// UnitSelector.js

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const UnitSelector = ({ selectedUnit, onSelectUnit }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          selectedUnit === "imperial" ? styles.selectedButton : styles.button
        }
        onPress={() => onSelectUnit("imperial")}
      >
        <Text>Imperial</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          selectedUnit === "metric" ? styles.selectedButton : styles.button
        }
        onPress={() => onSelectUnit("metric")}
      >
        <Text>Metric</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  selectedButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
  },
});

export default UnitSelector;
