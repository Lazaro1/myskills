import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greetting, setGreatting] = useState('');

  useEffect(() => {
    const currentHours = new Date().getHours();
    if (currentHours < 12) {
      setGreatting('Good Morning');
    } else if (currentHours >= 12 && currentHours < 18) {
      setGreatting('Good Afternoon');
    } else {
      setGreatting('Good Night');
    }
  }, [mySkills]);

  function handleAddSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Welcome, Lázaro</Text>
      <Text style={style.greetings}>{greetting}</Text>

      <TextInput
        style={style.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddSkill} />

      <Text style={[style.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: 'white',
  },
});
