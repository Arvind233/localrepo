import React from 'react';
import {View, Text} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

const App = () => {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Indian'},
    {key: '2', value: 'American'},
    {key: '3', value: 'Non-Indian'},
  ];

  return (
    <View style={{paddingHorizontal: 10, padding: 20}}>
      <Text style={{fontSize: 20, alignSelf: 'center'}}>
        Select Your Community
      </Text>
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        placeholder={'Select Community'}
        save="value"
      />
    </View>
  );
};

export default App;
