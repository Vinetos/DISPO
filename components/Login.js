import React, { Component } from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements'

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
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          {this.state.fontLoaded ?
            <View
              style={styles.loginView}>
              <View style={styles.loginTitle}>
                <Text style={styles.title}>
                  DISPO
                  <Text style={styles.title_plus}>+</Text>
                </Text>
              </View>
              <View style={styles.loginInput}>
                <Input
                  underlineColorAndroid='transparent'
                  onChangeText={username => this.setState({ username })}
                  value={username}
                  containerStyle={styles.textContainer}
                  inputContainerStyle={styles.inputContainer}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  placeholder="Nom d'utilisateur"
                  autoCorrect={false}
                  returnKeyType="next"
                  ref={input => this.usernameInput = input}
                  onSubmitEditing={() => this.passwordInput.focus()}
                  placeholderTextColor="white"
                />
                <Input
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({ password })}
                  value={password}
                  containerStyle={styles.textContainer}
                  inputContainerStyle={styles.inputContainer}
                  inputStyle={{ marginLeft: 10, color: 'white' }}
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholder="Mot de passe"
                  returnKeyType="done"
                  ref={input => this.passwordInput = input}
                  placeholderTextColor="white"
                />
              </View>
              <Button
                title='LOG IN'
                onPress={this.submitLoginCredentials.bind(this)}
                loading={showLoading}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  height: 50,
                  width: 250,
                  borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 30,
                }}
                containerStyle={{
                  marginTop: 30,
                  marginBottom: 30,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              />
            </View> : null}
        </ImageBackground>
      </KeyboardAvoidingView>
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
  loginView: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 5,
    width: 300,
    height: 300,
  },
  loginTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'light',
    fontSize: 30,
    color: '#fff'
  },
  title_plus: {
    fontFamily: 'bold',
    fontSize: 30,
    color: '#fff'
  },
  loginInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    width: 250
  },
  inputContainer: {
    borderBottomWidth: 0,
    marginLeft: 10
  }
});
