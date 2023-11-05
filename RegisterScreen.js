import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';
import DateOfBirth from './DateOfBirth';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View>
      <Header />
      <View style={{backgroundColor: 'black'}}>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Text style={styles.headerRegister}>Register</Text>
          <Text style={styles.detailsEntry}>Enter Your Details!!</Text>
        </View>
        <View style={styles.entrySection}>
          <View style={styles.allInfoContainer}>
            <TextInput
              style={styles.input}
              value={firstName}
              placeholder="Enter Your Name"
              onChangeText={text => setFirstName(text)}
            />
            <TextInput
              style={styles.input}
              value={email}
              placeholder="Enter Your Email"
              onChangeText={text => setEmail(text)}
            />
            <DateOfBirth />
            <TouchableOpacity style={styles.RegisterButton}>
              <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  headerRegister: {
    color: 'white',
    fontSize: 54,
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailsEntry: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entrySection: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 130,
    borderTopRightRadius: 130,
    paddingTop: 30,
    alignItems: 'center',
  },
  allInfoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    borderRadius: 15,
    //borderColor: 'black',
    //borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  RegisterButton: {
    backgroundColor: 'orange',
    borderRadius: 100,
    alignItems: 'center',
    width: 300,
    paddingVertical: 5,
    marginVertical: 10,
  },
});
