import React from 'react';

interface DownArrowIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const DownArrowIcon: React.FC<DownArrowIconProps> = ({
  size = 24,
  color = 'white',
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 5V19M12 19L19 12M12 19L5 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
