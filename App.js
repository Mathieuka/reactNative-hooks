/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//Components
import HookExample from './src/components2/HookExample';
import ClientStatusInfo from './src/components/ClientStatusInfo';
import TextInput1 from './src/components3/Input1';

export default class App extends Component<{}> {
  
  render() {
    return (
      <View style={styles.container}>
        <HookExample/>
        {/*example extract responsability in hook */}
        <ClientStatusInfo idClientConnected={134}/>
        <View style={{padding:20}}>
          <TextInput1/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
