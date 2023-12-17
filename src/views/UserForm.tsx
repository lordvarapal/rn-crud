// UserForm.js
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { Button } from 'react-native-elements';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <>
      <View style={style.form}>
        <Text>Name</Text>
        <TextInput
          style={style.input}
          onChange={name => setUser({...user, name})}
          placeholder="Informe o nome"
          value={user.name}
        />
        <Text>Email</Text>
        <TextInput
          style={style.input}
          onChange={email => setUser({...user, email})}
          placeholder="Informe o Email"
          value={user.name}
        />
        <Text>Avatar</Text>
        <TextInput
          style={style.input}
          onChange={avatarUrl => setUser({...user, avatarUrl})}
          placeholder="Informe o URL do Avatar"
          value={user.name}
        />
        <Button title="Salvar"
        onPress={()=>{
          navigation.goBack()
        }}/>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 15,
  },
  input: {
    heigh: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
