import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flatList: {
    flex: 1,
    marginBottom: 125,
  },
  image_background: {
    paddingTop: 50,
    flex: 1,
  },
  transparent_container: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 15,
    marginVertical: 20,
    margin: 20,
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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
