'use strict';

import React, { Component, PropTypes } from 'react';

export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div>
        <h1>Terms of use</h1>
      </div>
    )
  }
}
