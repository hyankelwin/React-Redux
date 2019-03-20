import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator, ScrollView, StatusBar,
} from 'react-native';
import { Container } from 'native-base';
import * as actions from 'repositories/actions';
import ItemList from '../components/ListItem';
import Head from '../components/Header';

class RepositoriesContainer extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest, username } = this.props;

    loadRepositoriesRequest(username);
  }

  render() {
    const { repositories } = this.props;
    return (
      <Container>
        <StatusBar backgroundColor="#7159c1" />
        <ScrollView>
          <Head />
          { repositories.loading ? (
            <ActivityIndicator size="small" color="#999" />
          ) : (
            repositories.data.map(repository => (
             <ItemList
                avatar={repository.owner.avatar_url}
                name={repository.name}
                id={repository.id}
                language={repository.language}
                url={repository.clone_url}
                key={repository.id}
              />
            ))
            )}

        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories.repositories,
  username: state.login.form.data.login
});

const mapDispatchToProps = {
  ...actions,
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesContainer);
