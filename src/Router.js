import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RandomAnimePage from './pages/RandomAnime/RandomAnime';
import TheStoryPage from './pages/TheStory/TheStory';
import CharactersPage from './pages/Characters/Characters';
import CharacterDetailPage from './pages/CharacterDetail/CharacterDetail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="RandomAnime" component={RandomAnimePage} />
        <Stack.Screen name="TheStory" component={TheStoryPage} />
        <Stack.Screen name="Characters" component={CharactersPage} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
