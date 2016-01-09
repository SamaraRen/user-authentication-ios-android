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
  TouchableHighlight,
} = React;


module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight 
      style={styles.button}
      underlayColor={'gray'}
      onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>{this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10,
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
  }
});

AppRegistry.registerComponent('authentication', () => authentication);
