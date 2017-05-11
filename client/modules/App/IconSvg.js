'use strict';
/**
 * Bool short logo svg
 */
import React, { Component } from 'react'

export default class BoolLogoSvg extends Component {
  render () {
    const {width, color, className} = this.props;
    return (
      <div>
        <span>Insu</span><span>rights</span>
      </div>
    )
  }
}

BoolLogoSvg.propTypes = {
  width: React.PropTypes.number,
  color: React.PropTypes.string,
  className: React.PropTypes.string
};

BoolLogoSvg.defaultProps = {
  color: '#154a99',
  width: 200,
  className: ''
};

