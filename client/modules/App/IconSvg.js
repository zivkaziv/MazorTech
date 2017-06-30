'use strict';
/**
 * Bool short logo svg
 */
import React, { Component } from 'react'

import logoImageWhite from '../Wizard/images/owl_logo_white.png';

export default class BoolLogoSvg extends Component {
  render () {
    const {width, color, className} = this.props;
    return (
      <div>
        <img src={logoImageWhite} style={{
          height:'30px',
          marginRight:'10px'
        }}/>
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

