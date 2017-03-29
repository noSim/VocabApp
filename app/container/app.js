
import React, { Component } from 'react';
import VocabListEntry from '../components/vocab-list-entry';
import VocabInputField from '../components/vocab-input-field';
import {View, StyleSheet, Text} from 'react-native';
import { ListView } from 'realm/react-native';

const Realm = require('realm');

const VocabSchema = {
   name: 'Vocab',
   primaryKey: 'word',
   properties: {
     word: 'string',
     trans: 'string',
     category: {type: 'string', default: 'none'},
     learnedCount: {type: 'int', default: 0},
   }
}

export default class App extends Component {
  constructor(props) {
      super(props);

      let realm = new Realm({
          schema: [VocabSchema]
      });

      realm.write(() => {
         realm.create('Vocab', {word: 'Welt', trans: 'World'}, true);
      });

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      let vocabs = realm.objects('Vocab');
      let vocabFormated = []
      for (let i = 0; i < vocabs.length; i++)
      {
        vocabFormated.push(vocabs[i]);
      }
      this.state = {
        re: realm,
        dataSource: ds.cloneWithRows(vocabs),
      };
  }

  render() {
    let realm = this.state.re
    realm.write(() => {
       realm.create('Vocab', {word: 'Hallo', trans: 'Hello'}, true);
    });

    return (
      <View style={{padding: 8}}>
        <Text>
         Count of Vocabs in Realm: {realm.objects('Vocab').length}
       </Text>
        <VocabInputField/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <VocabListEntry word={data.word} trans={data.trans}/>}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
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
