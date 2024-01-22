import { Button, Text, SafeAreaView, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";

export function DateSelector() {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView>
      <View style={styles.dateContainer}>
        <Button onPress={showDatepicker} title="Sélectionner la date" />
        <Button onPress={showTimepicker} title="Sélectionner l'heure" />
      </View>
      <Text style={styles.showDateSelected} >selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dateContainer : {
    margin : "auto",
    display : "flex",
    flexDirection: "row",
  },
  showDateSelected : {
    textAlign : "center"
  }
});