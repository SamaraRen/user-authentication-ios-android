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
      errorMessage: '',
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        	Sign In
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
      	<Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign In'} onPress={this.onPress} />
        <Button text={'I need an account...'} onPress={this.onSignupPress} />
      </View>
    );
  },
  onSignupPress: function() {
    this.props.navigator.push({name: 'signup'});
  },
  onPress: function() {
  	//log in
	Parse.User.logIn(this.state.username, this.state.password, {
	  success: function(user) {
      this.props.navigator.immediatelyResetRouteStack([{name: 'memory'}]);
	    // Do stuff after successful login.
	  },
	  error: (data, error) => {
	    // The login failed. Check error to see why.
      console.log(error)
	    this.setState({errorMessage: error.message});
	  },
	});
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
