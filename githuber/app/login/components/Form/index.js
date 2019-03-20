import React, { Component } from 'react';
import {
  ActivityIndicator, View, Image, StatusBar,
} from 'react-native';
import {
  Input, Button, Text, Container, Item,
} from 'native-base';
import styles from './styles';
import connectStyle from 'utils/connectStyle';

class Form extends Component {
  handleSubmit = async () => {
    const { f_loginRequest, username } = this.props;

    f_loginRequest(username);
  };

  render() {
    const {
      err,
      holder,
      loading,
      username,
      onChangeName,
      onRequestSend
    } = this.props;
    return (
      <Container>
        <StatusBar
          backgroundColor="#7159c1"
          barStyle="light-content"
        />
        <Image
          style={[styles.img]}
          source={{
            uri: 'https://www.edigitalagency.com.au/wp-content/uploads/GitHub-Logo-png-white-text.png'
          }}
        />
        <View>
          { err && <Text>Usuário inexistente!</Text> }
          <Item underline="false">
            <Input
              value={username}
              autoCorrect={false}
              onChangeText={onChangeName}
              autoCapitalize="none"
              placeholder={holder}
            />
          </Item>
          <Button onPress={onRequestSend}>
            { loading
              ? <ActivityIndicator size="small" color="#FFF" />
              : <Text>Entrar</Text>
            }
          </Button>
        </View>
      </Container>
    );
  }
}

export default connectStyle('githuber.Form', styles, Form);
