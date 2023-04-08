import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  transparent_container: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  scroll_view: {
    paddingTop: 300,
  },
  image_back_ground: {
    flex: 1,
  },
  title_japanese: {
    fontSize: 20,
    fontWeight: '900',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottom_container: {
    marginHorizontal: 80,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  rating: {
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  status: {
    fontWeight: '300',
    color: 'red',
    fontSize: 13,
  },
  separator_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator_line: {
    margin: 5,
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
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
    borderRadius: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  created_text: {
    shadowColor: '#000',
    shadowOffset: {width: -3, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    padding: 5,
    fontStyle: 'italic',
    fontWeight: '300',
    marginLeft: 20,
  },
  created_container: {
    top: 40,
    right: 220,
    backgroundColor: 'rgba(0, 255, 255, 0.6)',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
});
