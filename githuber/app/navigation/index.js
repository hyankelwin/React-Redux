import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Navigator from 'services/navigator';

import { Login as LoginScreen } from 'login';
import { Repositories as RepositoriesScreen } from 'repositories';

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Repositories: {
      screen: RepositoriesScreen,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: "none",
    navigationOptions: {
      header: null,
    },
  },
);

const NavigatorContainer = createAppContainer(StackNavigator);

const Router = () => (
  <Fragment>
    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
    <NavigatorContainer
      ref={Navigator.setContainer}
    />
  </Fragment>
);

export default Router;
