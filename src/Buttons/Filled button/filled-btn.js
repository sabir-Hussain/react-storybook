import React from 'react';
import PropTypes from 'prop-types';
import './filled-btn.css'

 
export const Button = ({type,size, label, ...props }) => {
    return (
      <button
        type="button"
        className={[`storybook-button c-btn-${type}`, `storybook-button--${size}`,].join(' ')}
        {...props}
      >
        {label}
      </button>
    );
  };

Button.propTypes = {
    /**
     * What background color to use
     */
    type: PropTypes.oneOf(['info', 'success','danger','warning']),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['default','small', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,

    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    size: 'default',
    onClick: undefined,
    type:'default'
};
  
export default Button