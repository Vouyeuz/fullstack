import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import { connect } from 'react-redux'

export class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>PageHeader</div>
    )
  }
}

const propTypes = {
  id: PropTypes.string
};

PageHeader.propTypes = propTypes;

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)
export default PageHeader;