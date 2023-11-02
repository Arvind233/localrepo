import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import CheckBox from 'react-native-checkbox-list'; // Make sure to install the library

const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [hobbies, setHobbies] = useState([]);

  const handleCheckBox = (hobby) => {
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter((h) => h !== hobby));
    } else {
      setHobbies([...hobbies, hobby]);
    }
  };

  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    checkboxText: {
      marginLeft: 10,
    },
    button: {
      width: '100%',
      backgroundColor: 'blue',
      color: 'white',
    },
  };

  return (
    <View style={styles.container}>
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

      <Text>Hobbies</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          label="Reading"
          checked={hobbies.includes('Reading')}
          onPress={() => handleCheckBox('Reading')}
        />
        <Text style={styles.checkboxText}>Reading</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          label="Sports"
          checked={hobbies.includes('Sports')}
          onPress={() => handleCheckBox('Sports')}
        />
        <Text style={styles.checkboxText}>Sports</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          label="Singing"
          checked={hobbies.includes('Singing')}
          onPress={() => handleCheckBox('Singing')}
        />
        <Text style={styles.checkboxText}>Singing</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          label="Dancing"
          checked={hobbies.includes('Dancing')}
          onPress={() => handleCheckBox('Dancing')}
        />
        <Text style={styles.checkboxText}>Dancing</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          label="Traveling"
          checked={hobbies.includes('Traveling')}
          onPress={() => handleCheckBox('Traveling')}
        />
        <Text style={styles.checkboxText}>Traveling</Text>
      </View>

      <Button
        title="Register"
        onPress={() => {
          // Handle registration logic here
          // You can navigate to the Home Screen upon successful registration
        }}
        style={styles.button}
      />
    </View>
  );
};

export default RegisterScreen;
