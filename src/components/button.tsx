import {View, StyleSheet, Text, Pressable} from 'react-native';
import {Colors} from '../styles/global';

const CustomBtn = ({children, onPress, style}: any) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const RoundBtn = ({children, onPress}: any) => {
  return (
    <Pressable style={styles.roundButton} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const LinkBtn = ({children, onPress}: any) => {
  return (
    <Text style={styles.link} onPress={onPress}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: Colors.link,
  },
  button: {
    backgroundColor: Colors.primary,
    marginVertical: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
  },
  roundButton: {
    borderColor: Colors.light,
    borderWidth: 1,
    borderRadius: 100,
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.light,
    fontSize: 20,
  },
});

export {CustomBtn, LinkBtn, RoundBtn};
