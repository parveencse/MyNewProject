import React, { Component } from 'react';
import PropTypes from 'prop-types';

import bgSrc from '../images/wallpaper.png';
import { Dimensions, StyleSheet, ImageBackground , ScrollView} from 'react-native';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
export default class Wallpaper extends Component {
  render() {
    return (
      <ScrollView>
        <ImageBackground style={styles.picture} source={bgSrc}>
          {this.props.children}
        </ImageBackground>
      </ScrollView>
      // <Image style={styles.picture} source={bgSrc}>
      //   {this.props.children}
      // </Image>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});