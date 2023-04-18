import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scroll_view: {
    flex: 1,
  },
  background_image: {
    flex: 1,
  },
  profil_image: {
    height: 300,
    width: 300,
    padding: 20,
  },
  profil_container: {
    shadowColor: '#000',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
    flex: 1,
    margin: 10,
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  names_container: {
    justifyContent: 'center',
    padding: 20,
  },
  character_name: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  character_name_kanji: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  character_detail: {
    padding: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
  transparent_container: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    marginVertical: 50,
    marginBottom: 130,
    margin: 20,
  },
  tab_place: {
    shadowColor: '#000',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 3,
    position: 'absolute',
    bottom: 0,
    width: '87%',
    margin: 25,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
