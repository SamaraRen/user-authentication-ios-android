/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} = React;

var Button =require('../common/button')
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: '',
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        	Sign Up
        </Text>

        <Text style={styles.label}>Usename:</Text>
        <TextInput 
        style={styles.input}
        value={this.state.username}
        onChangeText={(text) => this.setState({username: text})} />
        <Text style={styles.label}>Password:</Text>
        <TextInput
        	secureTextEntry={true}
        	style={styles.input}
        	value={this.state.password}
        	onChangeText={(text) => this.setState({password: text})} />
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.setState({passwordConfirmation: text})} />
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign Up'} onPress={this.onSignupPress} />
        <Button style={styles.button} text={'I have an account'} onPress={this.onSigninPress} />
      </View>
    );
  },
  onSignupPress: function() {
    if (this.state.password !== this.state.passwordConfirmation ) {
      return this.setState({ errorMessage: 'You passwords do not match.'})
    }
    var user = new Parse.User();
    user.set("username", this.state.username);
    user.set("password", this.state.password);

    user.signUp(null, {
      success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'memory'}]);
      },
      error: (user, error) => { this.setState({ errorMessage: error.message});
        console.log(error)
      },
    });
  },
  onSigninPress: function() {
    this.props.navigator.pop();
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
  	padding: 4,
  	height: 40,
  	borderColor: 'gray',
  	borderWidth: 1,
  	borderRadius: 5,
  	margin: 5,
  	width: 200,
  	alignSelf: 'center',
  },
  label: {
  	fontSize: 15,
  	alignSelf: 'center',
  }
});

AppRegistry.registerComponent('authentication', () => authentication);
