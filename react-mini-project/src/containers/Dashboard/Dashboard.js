import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { PageHeader } from '../../components';
// import { connect } from 'react-redux';

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <PageHeader />
        <div>Dashboard</div>
      </div>
    )
  }
}

const propTypes = {
  id: PropTypes.string
};

Dashboard.propTypes = propTypes;

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default Dashboard;