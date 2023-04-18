import React from 'react';
import {ScrollView, Text, ImageBackground, View} from 'react-native';

import styles from './TheStory.style';

import Button from '../../components/Button/Button'; //for each button at the bottom (we have two buttons on this page)

function TheStoryPage({route, navigation}) {
  // comes from RandomAnimePage.
  const {randomAnimeData, background_image} = route.params;

  //for the "Go Home" botton.
  function goToHomePage() {
    return navigation.navigate('RandomAnime');
  }

  //for the "Character" botton.
  function goToCharactersPage() {
    return navigation.navigate('Characters', {
      randomAnimeData, // it will be needed for the new API at CharactersPage
      background_image,
    });
  }

  return (
    <ImageBackground
      blurRadius={2}
      source={background_image}
      style={styles.image_back_ground}>
      <ScrollView style={styles.scroll_view}>
        <View style={styles.transparent_container}>
          <Text style={styles.title}>{randomAnimeData.title}</Text>
          <Text style={styles.title_japanese}>
            {randomAnimeData.title_japanese}
          </Text>
          {randomAnimeData.episodes && ( // if it has the specified information, return it.(Episodes)
            <Text style={styles.episodes}>
              Episodes: {randomAnimeData.episodes}
            </Text>
          )}
        </View>
        <View style={styles.transparent_container}>
          {randomAnimeData.synopsis ? (
            <Text style={styles.synopsis}>{randomAnimeData.synopsis}</Text>
          ) : (
            //if there isn't synopsis ;let it be an explanatory text
            <Text style={styles.synopsis}>No story information added.</Text>
          )}
        </View>
        <View style={styles.bottomSpace} />
      </ScrollView>
      <View style={styles.tab_place}>
        <Button onPress={goToHomePage} icon="home" />
        <Button onPress={goToCharactersPage} icon="account-multiple" />
      </View>
    </ImageBackground>
  );
}

export default TheStoryPage;
