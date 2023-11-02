import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Radio, CheckBox, DatePicker } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('male');
  const [hobbies, setHobbies] = useState([]);

  const handleCheckBox = (hobby) => {
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter((h) => h !== hobby));
    } else {
      setHobbies([...hobbies, hobby]);
    }
  };

  const styles = {
    // Define your styles here
  };

  return (
    <View>
      <Text>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />

      <Text>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text>Date of Birth</Text>
      <DatePicker
        style={styles.input}
        date={dateOfBirth}
        onDateChange={(date) => setDateOfBirth(date)}
      />

      <Text>Gender</Text>
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      <Text>Hobbies</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={hobbies.includes('Reading')}
          onValueChange={() => handleCheckBox('Reading')}
        />
        <Text>Reading</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={hobbies.includes('Sports')}
          onValueChange={() => handleCheckBox('Sports')}
        />
        <Text>Sports</Text>
      />
      {/* Add more hobbies as needed */}
      </View>

      {/* Add a Register button to navigate to the Home Screen */}
    </View>
  );
};

export default RegisterScreen;
          
