import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { connect } from 'react-redux';

export class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>MyProfile</div>
    )
  }
}

const propTypes = {
  id: PropTypes.string
};

MyProfile.propTypes = propTypes;

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
export default MyProfile