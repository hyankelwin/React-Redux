import React, { Component } from 'react';
import { Linking } from 'react-native';
import {
  List, ListItem, Left, Thumbnail, Right, Body, Text,
} from 'native-base';
import styles from './styles';
import connectStyle from 'utils/connectStyle';

class ItemList extends Component {
  handleItem = () => {
    const { url } = this.props;
    Linking.openURL(url);
  }

  render() {
    const {
      avatar,
      name,
      id,
      language,
    } = this.props;
    return (
      <List>
        <ListItem
          avatar
          onPress={() => this.handleItem()}
        >
          <Left>
            <Thumbnail source={{ uri: avatar }} />
          </Left>
          <Body>
            <Text style={styles.name} key={id}>{ name }</Text>
            <Text note>
              { language }
            </Text>
            <Text style={styles.status} note>
              Ativo
            </Text>
          </Body>
          <Right>
            <Text style={styles.link} note>Visitar</Text>
          </Right>
        </ListItem>
      </List>
    );
  }
}

export default connectStyle('githuber.ItemList', styles, ItemList);
