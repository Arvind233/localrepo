//https://www.npmjs.com/package/react-native-simple-radio-button

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const Radiobutton = () => {
  const [value, setValue] = useState(0);

  const data = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1},
  ];
  return (
    <View style={{padding: 20}}>
      <Text style={styles.radioText}>Select your Gender</Text>
      <RadioForm radio_props={data} onPress={value => setValue(value)} />
    </View>
  );
};

const styles = StyleSheet.create({
  radioText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default Radiobutton;
