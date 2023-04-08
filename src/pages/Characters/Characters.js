import React, {useEffect, useState} from 'react';
import {
  Text,
  ImageBackground,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

import styles from './Characters.style';

import Button from '../../components/Button/Button'; //for each button at the bottom (we have two buttons on this page)
import CharacterCard from '../../components/CharacterCard'; // for each character we put on the FlatList (with render function).
import SearchBar from '../../components/SearchBar/SearchBar'; // we can filter data by name with this component.

function CharactersPage({route, navigation}) {
  const {randomAnimeData, background_image} = route.params;

  const [loading, setLoading] = useState(true); // you know what it means "loading" :)
  const [charactersData, setCharactersData] = useState('');
  const [filteredCharactersData, setFilteredCharactersData] = useState(''); // this State for the data to be returned based on the state of the search box.

  useEffect(() => {
    fetchData();
  }, []);

  // Here is a different API than RandomAnimePage.
  const fetchData = async () => {
    const {data} = await axios.get(
      'https://api.jikan.moe/v4/anime/' +
        randomAnimeData.mal_id +
        '/characters',
    );
    setCharactersData(data.data);
    setFilteredCharactersData(data.data);
    setLoading(false);
  };

  //Go to detail of onPressed character.
  function goToCharacterDetail(idCharacter) {
    // we have need "idCharacter" for CharacterDetailPage API.
    navigation.navigate('CharacterDetail', {idCharacter, randomAnimeData});
  }

  function renderCharacters({item}) {
    return (
      <CharacterCard
        char={item}
        onPress={() => goToCharacterDetail(item.character.mal_id)}
      />
    );
  }

  //for the "Go Home" botton.
  function goToHomePage() {
    return navigation.navigate('RandomAnime');
  }

  //for the "Story" botton.
  function goToTheStoryPage() {
    return navigation.navigate('TheStory', {
      randomAnimeData,
      background_image,
    });
  }

  function handleSearch(text) {
    //we're filter data names this way because not all data is in the same case.
    const filteredList = charactersData.filter(character => {
      const searchedText = text.toLowerCase();
      const currentName = character.character.name.toLowerCase();

      return currentName.indexOf(searchedText) > -1;
    });

    //FlatList returning normal after searching and deleting something in the search box thanks of this!
    if (!filteredList) {
      setFilteredCharactersData(charactersData);
    } else {
      setFilteredCharactersData(filteredList);
    }
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
      source={background_image}
      resizeMode="cover"
      style={styles.image_background}>
      {charactersData[0] ? ( //The data to be used is given as Array, so [0]
        <SearchBar onSearch={handleSearch} />
      ) : (
        //If there isn't character data in this anime, let it be an explanatory text
        <Text style={styles.transparent_container}>No characters added.</Text>
      )}
      <FlatList
        numColumns={2}
        style={styles.flatList}
        data={filteredCharactersData}
        renderItem={renderCharacters}
      />
      <View style={styles.bottomSpace} />
      <View style={styles.tab_place}>
        <Button onPress={goToHomePage} buttonText={'Go Home'} />
        <Button onPress={goToTheStoryPage} buttonText={'The Story'} />
      </View>
    </ImageBackground>
  );
}

export default CharactersPage;
