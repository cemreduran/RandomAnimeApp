import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import styles from './CharacterCard.style';

const CharacterCard = ({char, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.character_card}>
        <ImageBackground
          style={{flex: 1}}
          resizeMode="contain"
          source={{uri: char.character.images.webp.image_url}}>
          <View style={styles.transparent_container_name}>
            <Text style={styles.name_text}>{char.character.name}</Text>
          </View>
          <View style={styles.transparent_container_role}>
            <Text style={styles.role_text}>like: {char.favorites}</Text>
            <Text style={styles.role_text}>role: {char.role}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterCard;
