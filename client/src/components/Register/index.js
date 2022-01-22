import React, {useState} from 'react';
import {API} from '../../config/api';

import {ActivityIndicator} from 'react-native';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Text,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';

export default function Register() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = async () => {
    try {
      setIsLoading(true);

      console.log(1);
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify({
        name,
        address,
        email,
        password,
      });

      const {data, status, statusText} = await API.post(
        '/register',
        body,
        config,
      );

      setIsLoading(false);
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight="semibold">
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight="medium"
          size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input onChangeText={setName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Address</FormControl.Label>
            <Input onChangeText={setAddress} />
          </FormControl>
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
              <Text> Sign up</Text>
            )}
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
