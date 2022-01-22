import {Box, View} from 'native-base';
import React from 'react';
import {Logo, Jumbotron} from '../../assets';
import {Image, StyleSheet, Text} from 'react-native';

import {useSelector} from 'react-redux';

export default function Profile() {
  const userState = useSelector(state => state.counter.user);

  return (
    <Box style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Box style={styles.main}>
        <View style={styles.imgProfile}>
          <Image source={Jumbotron} style={styles.imgJumbo} />
        </View>
        <Box style={styles.data}>
          <Text style={styles.name}>{userState.name}</Text>
          <Text style={styles.email}>{userState.email}</Text>
          <Text style={styles.address}>{userState.address}</Text>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
    backgroundColor: '#FFBD35',
    flex: 1,
  },

  main: {
    alignItems: 'center',
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

  imgProfile: {
    alignItems: 'center',
  },

  data: {
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  email: {
    color: 'black',
    fontSize: 20,
  },

  address: {
    color: 'black',
    fontSize: 20,
  },
});
