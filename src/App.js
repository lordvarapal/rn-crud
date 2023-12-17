// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import {Button} from 'react-native-elements';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import {UsersProvider} from './context/UserContext';
const Stack = createNativeStackNavigator();

export default () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type="clear"
                    icon={<FAIcon name="plus" size={30} color="white" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: 'Formulário de Usuários',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

<style type="text/css">{`
  @font-face {
    font-family: 'MaterialIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
  }
`}</style>;
