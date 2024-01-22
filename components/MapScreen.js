import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import MapView from "react-native-maps";

export function MapScreen(){
    const [region, setRegion] = useState({
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });


      const onRegionChange = (region) => {
        setRegion({ region });
      };

      return (
        <View style={styles.container}>
          <MapView region={region} style={styles.map} />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });