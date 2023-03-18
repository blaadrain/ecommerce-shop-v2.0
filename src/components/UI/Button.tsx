import React from 'react';

type ButtonProps = {
  text: string;
  color: string;
  background: string;
  className: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  background,
  className,
}) => {
  const styles = {
    fontFamily: 'Satoshi',
    fontSize: '16px',
    lineHeight: '150%',
    padding: '16px 32px',
    minWidth: '120px',
    color,
    background,
  };

  return (
    <button
      type="button"
      style={styles}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
