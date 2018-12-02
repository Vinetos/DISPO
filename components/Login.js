import React, { Component } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { Font } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../assets/images/bg_login_screen.jpg');

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      username: '',
      password: '',
      login_failed: false,
      showLoading: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('../assets/fonts/Georgia.ttf'),
      'regular': require('../assets/fonts/Montserrat-Regular.ttf'),
      'light': require('../assets/fonts/Montserrat-Light.ttf'),
      'bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true })
  }

  submitLoginCredentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading
    });
  }

  render() {
    const { username, password, showLoading } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          {this.state.fontLoaded ? <View>
            <Text style={styles.title}>
              DISPO
              <Text style={styles.title_plus}>+</Text>
            </Text>
          </View> : null}
        </ImageBackground>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'light',
    fontSize: 38,
    color: '#fff'
  },
  title_plus: {
    fontFamily: 'bold',
    fontSize: 42,
    color: '#fff'
  }
});
