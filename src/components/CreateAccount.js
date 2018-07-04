import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import CreateForm from './CreateForm';
import Wallpaper from './Wallpaper';
import CreateAccountButtonSubmit from './CreateAccountButtonSubmit';
import { Actions, ActionConst } from 'react-native-router-flux';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/logo.png';

export default class CreateAccount extends Component {
    render() {
        return (
            <Wallpaper>
                <View style={styles.container}>
                    <Image source={logoImg} style={styles.image} />
                </View>
                <CreateForm />
                <CreateAccountButtonSubmit />
            </Wallpaper>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 80,
      height: 80,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      marginTop: 20,
    },
  });