import {Box, Button, HStack} from 'native-base';
import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {Logo, Jumbotron} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeToken} from '../../counterSlice';
import {useDispatch} from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    console.log('LOGOUT');

    await AsyncStorage.removeItem('token');
    dispatch(removeToken());
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.main}>
        <Image source={Logo} style={styles.img} />
        <HStack>
          <Box style={styles.titleJumbo}>
            <Text style={styles.textJumbo}>Get all Data Users</Text>
            <Text style={styles.textJumbo}>
              Lorem Ipsum is simply dummy text of the ...
            </Text>
          </Box>
          <Button onPress={handleLogout}>
            <Text>Logout</Text>
          </Button>
          <Image source={Jumbotron} style={styles.imgJumbo} />
        </HStack>
      </Box>
      <Text style={styles.diskon}>Get Users</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  main: {
    color: 'black',
    height: 210,
    backgroundColor: '#FFBD35',
  },

  img: {
    width: 100,
    height: 30,
    padding: 10,
    margin: 10,
  },

  imgJumbo: {
    width: 130,
    height: 126,
    padding: 10,
    margin: 10,
    marginRight: 20,
  },

  titleJumbo: {
    height: 105,
    padding: 10,
    margin: 6,
    flex: 2,
  },

  textJumbo: {
    fontSize: 15,
    color: '#433434',
  },

  diskon: {
    color: 'orange',
    fontSize: 20,
    padding: 12,
    fontWeight: 'bold',
  },
});
