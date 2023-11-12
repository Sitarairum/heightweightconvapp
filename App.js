// App.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HooksTab from "./src/screens/HooksTab";
import MobXTab from "./src/screens/MobXTab";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Hooks" component={HooksTab} />
        <Tab.Screen name="MobX" component={MobXTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
