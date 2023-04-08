import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Button.style';

const Button = ({onPress, buttonText}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.button_text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
