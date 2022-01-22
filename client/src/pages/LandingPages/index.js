import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Box, Button, Center, HStack} from 'native-base';
import {Logo, Jumbotron} from '../../assets';
import {useDispatch} from 'react-redux';

export default function LandingPages() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Box style={styles.main}>
        <Center style={styles.icons}>
          <Image source={Logo} style={styles.img} />
        </Center>
      </Box>
      <Box style={styles.btnGroup}>
        <Button
          style={styles.btn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.TextBtnLogin}>Register</Text>
        </Button>
        <Button
          style={styles.btnLogin}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.TextBtnLogin}>Login</Text>
        </Button>
        <Box style={styles.footer}>
          <Text style={styles.footerText}>copyright</Text>
          <Text style={styles.footerText}>adi syahputra</Text>
        </Box>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBD35',
  },

  icons: {
    marginTop: 20,
  },
  main: {
    color: 'black',
    height: 210,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
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

  btnGroup: {
    padding: 25,
  },

  btn: {
    width: 300,
    height: 50,
    marginTop: 30,
    backgroundColor: '#433434',
  },

  btnLogin: {
    width: 300,
    height: 50,
    marginTop: 30,
    color: '#FFBD35',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#FFBD35',
  },

  TextBtnLogin: {
    color: '#FFBD35',
    fontWeight: 'bold',
    fontSize: 20,
  },

  footer: {
    marginTop: 250,
    borderBottomWidth: 1,
  },

  footerText: {
    color: '#433434',
    fontSize: 10,
    textAlign: 'center',
  },
});
