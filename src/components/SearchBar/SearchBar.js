import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './SearchBar.style';

const SearchBar = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text_input}
        placeholder="Search Character..."
        onChangeText={onSearch}
      />
    </View>
  );
};

export default SearchBar;
