// MobXTab.js

import React, { useState } from "react";
import { View, TextInput } from "react-native";
import UnitSelector from "../components/UnitSelector";
import WeightHeightInput from "../components/WeightHeightInput";
import SaveToDiskButton from "../components/SaveToDiskButton";

const MobXTab = () => {
  const [unit, setUnit] = useState("imperial");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  return (
    <View>
      {/* Import and use the components */}
      <UnitSelector selectedUnit={unit} onSelectUnit={setUnit} />
      <WeightHeightInput
        placeholder={`Enter weight in ${unit === "imperial" ? "lbs" : "kg"}`}
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />
      <WeightHeightInput
        placeholder={`Enter height in ${unit === "imperial" ? "ft & in" : "m"}`}
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <SaveToDiskButton onPress={() => console.log("Save to Disk pressed")} />
    </View>
  );
};

export default MobXTab;
