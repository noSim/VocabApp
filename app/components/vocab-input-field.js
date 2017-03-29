
import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { Container, Content, Form, Item, Input, Label} from 'native-base';
import VocabService from '../services/VocabService'

export default class VocabInputField extends Component {

  constructor(props) {
      super(props);

      this.state = {
        word: '',
        trans: '',
      };
  }

  submit()
  {
    VocabService.save(this.state.word, this.state.trans)
    this.setState({word: ''});
    this.setState({trans: ''});
  }

  render() {
    return (
        <Form>
            <Item floatingLabel>
                <Label style={{color: '#2fa7bc'}}>Wort</Label>
                <Input returnKeyType='next'
                  onChangeText={(word) => this.setState({word})}
                  value={this.state.word}
                />
            </Item>
            <Item floatingLabel>
                <Label style={{color: '#2fa7bc'}}>Übersetzung</Label>
                <Input
                onSubmitEditing={(event) => this.submit()}
                onChangeText={(trans) => this.setState({trans})}
                value={this.state.trans}
                />
            </Item>
        </Form>
    );
  }
}

AppRegistry.registerComponent('VocabInputField', () => VocabInputField);
