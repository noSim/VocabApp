
import React, { Component } from 'react';
import VocabListEntry from '../components/vocab-list-entry';
import VocabInputField from '../components/vocab-input-field';
import {View, StyleSheet, Text} from 'react-native';
import { ListView, Container, Content, Header, Title, Left, Button, Body, Right, Icon } from 'realm/react-native';
import VocabService from '../services/VocabService'

export default class App extends Component {

  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(VocabService.getAll()),
      };
      VocabService.registerNotify(this.updateList, this);
  }

  updateList(self) {
      let list = VocabService.getAll();
      self.setState({dataSource: self.state.dataSource.cloneWithRows(list)});
  }

  render() {
    return (
      <View style={{padding: 8}}>
        <View>
          <Text>
           Count of Vocabs in Realm: {VocabService.getCount()}
         </Text>
          <VocabInputField/>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => <VocabListEntry word={data.word} trans={data.trans}/>}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          />
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#123123'
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
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
