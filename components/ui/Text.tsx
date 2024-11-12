import React, { FC, ReactNode } from 'react';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TextWeight = 'light' | 'normal' | 'medium' | 'bold' | 'extrabold';

interface TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  className?: string;
  children: ReactNode;
}

const weightClasses: { [key in TextWeight]: string } = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

// Define responsive sizes for each variant
const variantClasses: { [key in TextVariant]: string } = {
  h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
  h2: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  h3: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  h4: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  h5: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
  h6: 'text-base sm:text-lg md:text-xl lg:text-2xl',
  p: 'text-base sm:text-md md:text-lg lg:text-xl',
  span: 'text-sm sm:text-base md:text-md lg:text-lg',
};

const Text: FC<TextProps> = ({
  variant = 'p',
  weight = 'normal',
  className = '',
  children,
}) => {
  const Component = variant as keyof JSX.IntrinsicElements;
  const weightClass = weightClasses[weight];
  const variantClass = variantClasses[variant];

  return (
    <Component className={`${weightClass} ${variantClass} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
