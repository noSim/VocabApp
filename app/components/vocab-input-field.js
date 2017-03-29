
import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { Container, Content, Form, Item, Input, Label} from 'native-base';

export default class VocabInputField extends Component {

  render() {
    return (
        <Form>
            <Item floatingLabel>
                <Label style={{color: '#2fa7bc'}}>Wort</Label>
                <Input returnKeyType='next'/>
            </Item>
            <Item floatingLabel>
                <Label style={{color: '#2fa7bc'}}>Übersetzung</Label>
                <Input />
            </Item>
        </Form>
    );
  }
}

AppRegistry.registerComponent('VocabInputField', () => VocabInputField);
