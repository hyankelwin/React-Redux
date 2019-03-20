import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from 'navigation';
import { Container } from 'native-base';

import store from './store';

class Master extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Router />
        </Container>
      </Provider>
    )
  }
}

export default Master;
