import { View, StyleSheet, Button, Text } from "react-native";
import { Input } from "react-native-elements";
import React, { useState } from "react";
import { AlertType } from "./_components/AlertType";
import { DateSelector } from "./_components/DateSelector";
import MapView from "react-native-maps";

export function FormScreen() {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [region, setRegion] = useState({
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const onChangeText = (text) => {
    setDescriptionValue(text);
  };

  // const getInitialState = () => {
  //   return {
  //     region: {
  //       latitude: 37.78825,
  //       longitude: -122.4324,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //   };
  // }

  const onRegionChange = (region) => {
    setRegion({ region });
  };

  return (
    <View style={styles.container}>
      {/* ==== Select alert type ==== */}
      <AlertType></AlertType>
      {/* ==== Description ==== */}
      <Input
        label="Description de l'alerte : "
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => onChangeText(text)}
        value={descriptionValue}
        style={styles.descriptionContainer}
      />
      {/* ==== Date selector ==== */}
      <DateSelector></DateSelector>
      {/* ==== Map adress selector ==== */}
        <MapView
          region={region}
          onRegionChange={(region) => onRegionChange(region)}
          style={styles.map}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
  },
  buttonContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
  },
  descriptionContainer: {
    alignItems: "center",
  },
  mapContainer: {
    width: "100%",
     height: "100%",
    
  },
});
