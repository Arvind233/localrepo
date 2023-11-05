import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  const route = useRoute();
  return (
    <View>
      <Text style={{fontSize: 20}}>Name :{route.params.name}</Text>
      <Text style={{fontSize: 20}}>Email :{route.params.email}</Text>
    </View>
  );
};

export default Header;

// register button logic

// const navigation = useNavigation();

// const register = () => {
//   navigation.navigate("HomeScreen",{
//     name: firstName,
//     email: email,
//   });
// };

// onPress={register}
