import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  transparent_container: {
    // shadowColor: '#000',
    // shadowOffset: {width: -5, height: 5},
    // shadowOpacity: 1,
    // shadowRadius: 5,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 15,
    marginVertical: 20,
    margin: 20,
  },
  scroll_view: {
    paddingTop: 50,
    paddingBottom: 500,
    flex: 1,
  },
  bottomSpace: {
    marginTop: 170,
  },
  image_back_ground: {
    resizeMode: 'cover',
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: 'black',
    marginHorizontal: 10,
  },
  title_japanese: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  episodes: {
    fontWeight: 'bold',
    color: 'darkred',
    textAlign: 'right',
    marginHorizontal: 15,
  },
  synopsis: {
    padding: 15,
    fontSize: 16,
    fontStyle: 'italic',
  },
  tab_place: {
    shadowColor: '#000',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
    position: 'absolute',
    bottom: 0,
    width: '87%',
    margin: 25,
    borderRadius: 50,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
