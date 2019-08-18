import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load(`client:auth2`, () => {
      window.gapi.client
        .init({
          clientId: `688568062724-ldf404jum0705bvbeqhr17lk82pvgqgo.apps.googleusercontent.com`,
          scope: `email`
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className='ui blue google button' onClick={this.onSignOutClick}>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className='ui green google button' onClick={this.onSignInClick}>
          <i className='google icon' />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

// const mapStateToProps = state => ({
//   isSignedIn: state.auth.isSignedIn
// });

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);
