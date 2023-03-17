import React from 'react';

type ButtonProps = {
  text: string;
  className: string;
  styles: 'light' | 'transparent' | 'primary';
};

const lightStyles = {
  color: '#2a254b',
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '150%',
  background: '#F9F9F9',
  padding: '16px 32px',
};

const transparentStyles = {
  color: '#FFFFFF',
  fontFamily: 'Satoshi',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '150%',
  background: 'rgba(249, 249, 249, 0.15)',
  padding: '16px 32px',
};

const Button: React.FC<ButtonProps> = ({ text, styles, className }) => {
  return (
    <button
      type="button"
      style={styles === 'light' ? lightStyles : transparentStyles}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
