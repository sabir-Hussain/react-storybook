import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

 
export const Button = ({type,color, size, label, ...props }) => {

  let btnType;
  if(type === 'filled'){
    btnType = `c-btn-${color}`
  }else if(type === 'outline'){
    btnType = `c-btn-outline-${color}`
  }

    return (
      <button
        type="button"
        className={['c-btn', btnType, `storybook-button--${size}`,].join(' ')}
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
    color: PropTypes.oneOf(['info', 'success','danger','warning']),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['default','small', 'large']),
    /**
     * Button type
     */
    type: PropTypes.oneOf(['filled','outline']),
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
    color:'default',
    type: 'filled'
};
  
export default Button