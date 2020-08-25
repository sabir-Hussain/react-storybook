import React from 'react';
import PropTypes from 'prop-types';
import './filled-btn.css'

 
export const FilledButton = ({type, size, label, ...props }) => {

  let btnType;
  if(type === 'filled'){
    btnType = `storybook-button c-btn-${type}`
  }else if(type === 'outline'){
    btnType = `storybook-button c-btn-outline-${type}`
  }

    return (
      <button
        type="button"
        className={[btnType, `storybook-button--${size}`,].join(' ')}
        {...props}
      >
        {label}
      </button>
    );
  };

FilledButton.propTypes = {
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

FilledButton.defaultProps = {
    size: 'default',
    onClick: undefined,
    type:'default'
};
  
export default FilledButton