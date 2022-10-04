import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { connect } from 'react-redux';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>SignUp</div>
    )
  }
}

const propTypes = {
  id: PropTypes.string
};

SignUp.propTypes = propTypes;

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
export default SignUp