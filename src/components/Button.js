import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={style.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
          <Text style={style.buttonText}>ADD</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    button: {
      backgroundColor: '#a370f7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
    }
  });