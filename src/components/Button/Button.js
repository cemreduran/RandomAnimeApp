import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Button.style';

const Button = ({onPress, icon}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name={icon} color="#e0e0e0" size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default Button;
