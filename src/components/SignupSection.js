import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
export default class SignupSection extends Component {
  _createAccount() {
    Actions.register();
  }
  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight style={styles.button}
          onPress={() => this._createAccount()}>
          <Text style={styles.text}>Create Account</Text>
        </TouchableHighlight>

        <Text style={styles.text}>Forgot Password?</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  
    zIndex: 100,
  },
});