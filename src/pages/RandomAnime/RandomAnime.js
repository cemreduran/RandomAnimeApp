import React, {useEffect, useState} from 'react';
import {Text, View, ImageBackground, ActivityIndicator} from 'react-native';
import axios from 'axios';

import styles from './RandomAnime.style';

import Button from '../../components/Button/Button'; //for each button at the bottom (we have three buttons on this page)

const RANDOM_URL = 'https://api.jikan.moe/v4/random/anime';
const NARUTO_URL = 'https://api.jikan.moe/v4/anime/1735/full';

function RandomAnimePage({navigation}) {
  //We will keep the data of the new anime here.
  const [randomAnimeData, setRandomAnimeData] = useState(null);

  //When the app opens, we have a new random anime.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data} = await axios.get(RANDOM_URL);
    setRandomAnimeData(data.data);
  };

  //In order not to get a render error if there is no data from the API yet.
  if (randomAnimeData === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  //to not show hentai (japanese pornography).
  if (randomAnimeData.rating === 'Rx - Hentai') {
    fetchData();
  }
  // For the 'The Story' button.
  function goToTheStory() {
    navigation.navigate('TheStory', {
      randomAnimeData,
      background_image,
    });
  }

  // For the "Character Page" botton.
  function goToCharactersPage() {
    navigation.navigate('Characters', {randomAnimeData, background_image});
  }

  const background_image = {uri: randomAnimeData.images.webp.large_image_url};

  // There are so much "<View>" in 'return()' because there are many separate parts on the RandomAnime.
  return (
    <ImageBackground
      source={background_image}
      resizeMode="cover"
      style={styles.image_back_ground}>
      <View style={styles.created_container}>
        <Text style={styles.created_text}>Created by Cemre Duran</Text>
      </View>
      <View style={styles.scroll_view}>
        <View style={styles.transparent_container}>
          <Text style={styles.title}>{randomAnimeData.title}</Text>
        </View>
        {randomAnimeData.title_japanese && ( //data is dirty a little bit; some don't have this kind of title.
          <View style={styles.separator_container}>
            <View style={styles.separator_line} />
            <View style={styles.transparent_container}>
              <Text style={styles.title_japanese}>
                {randomAnimeData.title_japanese}
              </Text>
            </View>
            <View style={styles.separator_line} />
          </View>
        )}
        <View style={styles.bottom_container}>
          {randomAnimeData.rating && ( //data is dirty a little bit; some have no rating.
            <Text style={styles.rating}>
              Suitability: {randomAnimeData.rating}
            </Text>
          )}
          <Text style={styles.status}>{randomAnimeData.status}</Text>
        </View>
      </View>
      <View style={styles.tab_place}>
        <Button onPress={fetchData} icon="refresh" />
        <Button onPress={goToTheStory} icon="book-open-page-variant-outline" />
        <Button onPress={goToCharactersPage} icon="account-multiple" />
      </View>
    </ImageBackground>
  );
}

export default RandomAnimePage;
