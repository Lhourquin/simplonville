import { Button, Dialog, CheckBox } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

export function AlertType() {
  const [alertTypes, setAlertTypes] = useState([
    {
        typeId : 0,
        typeLabel : 'Accident'    
    },
    {
        typeId : 1,
        typeLabel : 'Travaux'    
    },
    {
        typeId : 2,
        typeLabel : 'Problème de voirie'    
    },
    {
        typeId : 3,
        typeLabel : 'Perte d\'annimaux'    
    },
    {
        typeId : 4,
        typeLabel : 'Propreté'    
    },
    {
        typeId : 5,
        typeLabel : 'Eclairage'    
    }
  ])
  const [alertTypeModalIsVisible, setAlertTypeModalIsVisible] = useState(false);
  const [checked, setChecked] = useState(1);
  const showAlertTypeModal = () => {
    setAlertTypeModalIsVisible(!alertTypeModalIsVisible);
  };

  return (
    <View>
      <Button
        title="Type d'alerte"
        onPress={showAlertTypeModal}
        buttonStyle={styles.button}
      />
      <Dialog
        isVisible={alertTypeModalIsVisible}
        onBackdropPress={showAlertTypeModal}
      >
        <Dialog.Title title="Selectionner le type d'alerte" />
        {alertTypes.map((a, idx) => (
          <CheckBox
            key={'typeId_'+a.typeId}
            title={a.typeLabel}
            containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === a.typeId}
            onPress={() => setChecked(a.typeId)}
          />
        ))}
        <Dialog.Actions>
          <Dialog.Button
            title="Confirmer"
            onPress={() => {
              console.log(`Option ${checked} was selected!`);
              showAlertTypeModal();
            }}
          />
          <Dialog.Button title="Annuler" onPress={showAlertTypeModal} />
        </Dialog.Actions>
      </Dialog>
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
});
