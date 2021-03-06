import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import Icon from './Icon';

const IconButtonStyle = Styled.button`
    -webkit-app-region: no-drag;
    user-select: none;
    width: auto;
    height: 100%;
    border: 0px;
    outline: 0px;
    background-color: transparent;
    transition: all 0.3s ease 0s;

    &:disabled, &[disabled], &:hover {
        opacity: 0.75;
        cursor: pointer !important;
        transition: all 0.3s ease 0s;
    }

    &:disabled, &[disabled] {
      cursor: default !important;
    }
`;

const ImageContainerStyle = Styled.div`
    display: block;
    pointer-events: none;
    width: 27px;
    height: 27px;

    &:hover {
      cursor: pointer !important;
    }
`;

const IconButton = (props) => {
  const {
    disabled, icon, theme, color, onClick,
  } = props;

  return (
    <IconButtonStyle
      onClick={onClick}
      disabled={disabled}
    >
      <ImageContainerStyle>
        <Icon name={icon} theme={theme} color={color} />
      </ImageContainerStyle>
    </IconButtonStyle>
  );
};

IconButton.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  theme: 'day',
  disabled: false,
};

export default IconButton;

