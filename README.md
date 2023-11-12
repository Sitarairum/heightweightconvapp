# heightweightconvapp

REACT NATIVE EXPO PROJECT

This repository contains a React Native project built with Expo. The app is designed for weight and height conversion with two tabs - "Hooks" and "MobX."

PREREQUISITES

Before you begin, ensure you have the following installed on your machine:
Node.js
npm or Yarn
Expo CLI

GETTING STARTED
Clone the Repository:
git clone https://github.com/Sitarairum/heightweightconvapp

Navigate to the Project Directory:
cd heightweightconvapp

Install Dependencies:
npm install

Run the Project:
expo start

Launch on Emulator or Device:
If you have an iOS simulator, press i.
If you have an Android emulator, press a.
You can also scan the QR code with the Expo Go app on your device.

FOLDER STRUCTURE
src/: Contains the source code for the React Native app.
components/: Reusable React components.
screens/: Screen components for different sections of the app.



the code only includes the structure and design elements, and not the actual functionality of unit conversion, saving to disk, or reading from disk.

TABS: The code sets up a bottom tab navigator with two tabs, "Hooks" and "MobX," 

INPUT FIELDS: Within each tab (Hooks and MobX), there are two input fields: one for weight (lbs/kg) and another for height (ft & in/m). These fields are implemented using the WeightHeightInput component.

UNIT SELECTION: The UnitSelector component is included for selecting between Imperial and Metric units. This component dynamically changes the displayed units based on the user's selection.

SAVE TO DISK BUTTON: The SaveToDiskButton component is provided, although it currently only logs a message to the console when pressed.


https://github.com/Sitarairum/heightweightconvapp/assets/66296915/fde6ea99-6376-4555-871a-27e984bb17af




