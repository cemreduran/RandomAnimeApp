import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  Image,
} from 'react-native';
import Button from '../../components/Button/Button'; //for each button at the bottom (we have two buttons on this page)

import styles from './CharacterDetail.style';

function CharDetailPage({route, navigation}) {
  const {idCharacter, randomAnimeData} = route.params;

  const [loading, setLoading] = useState(true);
  const [characterDetailData, setCharacterDetailData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data} = await axios.get(
      //Here is third API.
      'https://api.jikan.moe/v4/characters/' + idCharacter,
    );
    setCharacterDetailData(data.data);
    setLoading(false);
  };

  // To return to the "RandomAnimePage" with the "Go Home" button.
  function goToHomePage() {
    return navigation.navigate('RandomAnime');
  }

  // For return to the "CharactersPage" with the "Character" button.
  function goToCharactersPage() {
    navigation.navigate('Characters', {randomAnimeData});
  }

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <ImageBackground
      blurRadius={2}
      resizeMode="cover"
      source={{uri: characterDetailData.images.webp.image_url}}
      style={styles.background_image}>
      <ScrollView style={styles.scroll_view}>
        <View style={styles.transparent_container}>
          <View style={styles.profil_container}>
            <Image
              source={{uri: characterDetailData.images.webp.image_url}}
              resizeMode="contain"
              style={styles.profil_image}
            />
            <View style={styles.names_container}>
              <Text style={styles.character_name}>
                {characterDetailData.name}
              </Text>
              <Text style={styles.character_name_kanji}>
                {characterDetailData.name_kanji}
              </Text>
            </View>
          </View>
          {characterDetailData.about ? (
            <Text style={styles.character_detail}>
              {characterDetailData.about}
            </Text>
          ) : (
            //If there isn't 'character.about' data in this character, let it be an explanatory text
            <Text style={styles.character_detail}>
              No characters information added.
            </Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.tab_place}>
        <Button onPress={goToHomePage} icon="home" />
        <Button onPress={goToCharactersPage} icon="account-multiple" />
      </View>
    </ImageBackground>
  );
}

export default CharDetailPage;
