import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function SkillCard() {
  return (
    <TouchableOpacity style={style.buttonSkill} key={1}>
      <Text style={style.textSkill}>skil</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    buttonSkill: {
      backgroundColor: '#1f1e25',
      padding: Platform.OS === 'ios' ? 15 : 15,
      borderRadius: 50,
      alignItems: 'center',
      marginVertical: 10,
    },
    textSkill: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    }
  });
