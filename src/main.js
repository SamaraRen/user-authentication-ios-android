/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 //Parse.initialize("GufliQ0KFHSncYPSILXmk3AF35nR7Qw4nPNLCLkV", "LVhaRmovnAvLA0ydMxK5VDYkBZf94DqpUi8phRKL");
'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var Signin = require('./component/authentication/signin');
var Signup = require('./component/authentication/signup');
var Memory = require('./component/memory/memory');

var ROUNTES = {
  signin: Signin,
  signup: Signup,
  memory: Memory,
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("GufliQ0KFHSncYPSILXmk3AF35nR7Qw4nPNLCLkV", "LVhaRmovnAvLA0ydMxK5VDYkBZf94DqpUi8phRKL");
  },
  renderScene: function(route, navigator) {
    var Component = ROUNTES[route.name];// ROUTNES['signin'] => Signin
    return <Component route={route} navigator={navigator}/>;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}} 
        renderScene={this.renderScene} 
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight}}/>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

AppRegistry.registerComponent('authentication', () => authentication);
