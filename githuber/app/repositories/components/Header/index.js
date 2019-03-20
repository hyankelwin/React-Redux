import React, { Component } from 'react';
import {
  Header, Left, Title, Body, Right, Button, Text,
} from 'native-base';
import { StatusBar } from 'react-native';
import * as Navigator from 'services/navigator';
import styles from './styles';
import connectStyle from 'utils/connectStyle';

class Head extends Component {
  handleLogin = () => {
    Navigator.reset('Login');
  }

  render() {
    return (
      <Header>
        <StatusBar
          backgroundColor="#7159c1"
        />
        <Left />
        <Body>
          <Title>Repositórios</Title>
        </Body>
        <Right>
          <Button onPress={() => this.handleLogin()} transparent>
            <Text>Sair</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default connectStyle('githuber.Head', styles, Head);
