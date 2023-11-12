// SaveToDiskButton.js

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const SaveToDiskButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Save to Disk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
});

export default SaveToDiskButton;
