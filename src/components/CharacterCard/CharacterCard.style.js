import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  character_card: {
    shadowColor: '#000',
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
    width: 176,
    height: 269,
    margin: 10,
  },
  transparent_container_name: {
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf: 'flex-start',
    marginVertical: 20,
  },
  transparent_container_role: {
    padding: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginVertical: 20,
    alignSelf: 'flex-end',
    top: 140,
    left: 7,
  },
  name_text: {
    fontWeight: 'bold',
  },
  role_text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
