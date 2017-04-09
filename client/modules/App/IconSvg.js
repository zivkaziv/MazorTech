import React, { Component } from 'react'

export class BoolLogoSvg extends Component {
  render() {
    const { width, color, className } = this.props;

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 855 205.7'
        style={{enableBackground: 'new 0 0 855 205.7'}}
        xmlSpace='preserve'
        fill={color}
        width={`${width}px`}
        height={`${width / 4.1565}px`}
        className={className}>
        <g>
          <g>
            <defs><rect width='854' height='205' /></defs>
            <clipPath><use style={{overflow: 'visible'}} /></clipPath>
            <path d='M464.6,36c-18.8-0.1-21.4,18.1-21.4,31.9c-0.1,13.7,2.3,32.3,21.1,32.4c18.7,0.1,21.4-18.4,21.4-32.1 C485.7,54.3,483.3,36.1,464.6,36 M464,136.2c-48.7-0.3-70.5-32.7-70.3-68.6c0.2-36,22.4-67.8,71.1-67.6 c48.7,0.3,70.5,32.4,70.3,68.4C534.9,104.4,512.7,136.5,464,136.2' />
          </g>
          <path d='M587.3,36.8c-18.7-0.1-21.3,18.1-21.4,31.9c-0.1,13.7,2.3,32.2,21.1,32.4c18.7,0.1,21.3-18.4,21.4-32.1 C608.5,55.1,606.1,36.9,587.3,36.8 M586.8,137c-48.7-0.3-70.5-32.7-70.3-68.6c0.2-36,22.4-67.8,71.1-67.6 c48.7,0.3,70.5,32.4,70.3,68.4C657.7,105.2,635.5,137.3,586.8,137' />
          <g>
            <defs><rect width='854' height='205' /></defs>
            <clipPath><use style={{overflow: 'visible'}} /></clipPath>
            <path d='M412.2,135.3c35.1,15.7,71.6,22.7,111.3,22.9c41.7,0.2,73.3-6.3,113.3-21.6l-0.2,43.2 c-35.9,17.8-74.6,26.1-113.4,25.8c-42.2-0.3-72.7-8.9-111.3-27.1L412.2,135.3z M412.2,135.3' />
          </g>
        </g>
      </svg>
    )
  }
}

BoolLogoSvg.propTypes = {
  width: React.PropTypes.number,
  color: React.PropTypes.string,
  className: React.PropTypes.string,
};

BoolLogoSvg.defaultProps = {
  color: '#154a99',
  width: 200,
  className: '',
};

