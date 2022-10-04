import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { connect } from 'react-redux';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>Login</div>
    )
  }
}

const propTypes = {
  id: PropTypes.string
};

Login.propTypes = propTypes;

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login