// UserForm.js
import React, { useContext } from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Avatar, Button, ListItem} from 'react-native-elements';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import UsersContext from '../context/UserContext';

export default props => {
  const { state, dispatch } = useContext(UsersContext)

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('delete' + user.id);
        },
      },
      {
        text: 'Não',
      },
    ]);
  }
  function getUserItem({item: user}) {
    return (
      <ListItem
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}
        rightElement={() => getActions(user)}>
        <Avatar
          rounded
          source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
        />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <FAIcon name="edit-2" type="Feather" color="#517fa4" size={40} />
        <View style={{flexDirection: 'row'}}>
          <Button
            onPress={() => props.navigation.navigate('UserForm', user)}
            type="clear"
            icon={
              <FAIcon name="edit-2" type="Feather" color="#517fa4" size={40} />
            }
          />
          <Button
            onPress={() => confirmUserDeletion(user)}
            type="clear"
            icon={
              <FAIcon name="trash-2" type="Feather" color="#517fa4" size={40} />
            }
          />
        </View>
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};
