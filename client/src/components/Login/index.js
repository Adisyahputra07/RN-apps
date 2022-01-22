import React, {useState} from 'react';
import {API, setAuthToken} from '../../config/api';
import {ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {dataUsers, setToken} from '../../counterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleOnSubmit = async () => {
    try {
      setIsLoading(true);
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify({
        email,
        password,
      });

      const {data, status, statusText} = await API.post('/login', body, config);

      setAuthToken(data.items.token);
      await AsyncStorage.setItem('token', data.items.token);
      const getProfile = await API.get('/profile');
      const userData = getProfile.data.data;
      dispatch(dataUsers(userData));
      dispatch(setToken(data.items.token));

      setIsLoading(false);
      console.log('Sede');
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={setPassword} />
          </FormControl>
          <Button
            mt="2"
            style={{backgroundColor: '#FFBD35'}}
            onPress={handleOnSubmit}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text> Sign In</Text>
            )}
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
