import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

export default class VocabListEntry extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', paddingTop: 8, paddingLeft: 8, paddingRight: 8, paddingBottom: 8}}>
        <Text style={{flex: 1, paddingRight: 4}}>{this.props.word}</Text>
        <Text style={{flex: 1, paddingLeft: 4}}>{this.props.trans}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('VocabListEntry', () => VocabListEntry);
