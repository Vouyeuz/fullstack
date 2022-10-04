import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { PageHeader } from '../../components';
// import { connect } from 'react-redux';

export class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <PageHeader />
        <div>Order</div>
      </div>
    )
  }
}

const propTypes = {
  id: PropTypes.string
};

Order.propTypes = propTypes;

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Order)
export default Order;