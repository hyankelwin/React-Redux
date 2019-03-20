import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'login/actions';
import Form from '../components/Form';

class Login extends Component {
  state = { username: '' }

  render() {
    const { username } = this.state;
    const { error, loading } = this.props;

    return (
      <Form
        err={error}
        loading={loading}
        username={username}
        holder="Digite seu usuário"
        onRequestSend={() => {this.props.makeLogin(username)}}
        onChangeName={text => this.setState({ username: text })}
      />
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.form.error,
  loading: state.login.form.loading,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
