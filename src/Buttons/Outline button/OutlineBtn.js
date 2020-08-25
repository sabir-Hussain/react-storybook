import React from 'react';
import PropTypes from 'prop-types';
import './outline-btn.css'

export const Outlinebutton = ({type,size, label, ...props }) => {
    return (
      <button
        type="button"
        className={[`storybook-button c-btn-outline-${type}`, `storybook-button--${size}`,].join(' ')}
        {...props}
      >
        {label}
      </button>
    );
  };

Outlinebutton.propTypes = {
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

Outlinebutton.defaultProps = {
    size: 'default',
    onClick: undefined,
    type:'success'
};
  
export default Outlinebutton