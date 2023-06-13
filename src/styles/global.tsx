import {StyleSheet} from 'react-native';

const Colors = {
  primary: '#4E4187',
  secondary: '#F7EBE8',
  dark: '#0F110C',
  light: '#FFF',
  link: 'blue',
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
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '80%',
  },
});

export {Colors, Styles};
