import {StyleSheet} from 'react-native';

const ApiUrl = 'https://mathiasspiegelhauer.dk/social/';

const Colors = {
  primary: '#4E4187',
  secondary: '#F7EBE8',
  dark: '#0F110C',
  light: '#FFF',
  link: 'blue',
  error: 'red',
};

const Styles = StyleSheet.create({
  title: {
    fontSize: 50,
    marginBottom: 20,
  },
  label: {
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: Colors.secondary,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  descriptionInput: {
    height: 100,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    width: '80%',
  },
  hidden: {
    display: 'none',
  },
});

export {Colors, Styles, ApiUrl};
