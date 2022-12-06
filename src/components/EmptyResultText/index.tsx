import { EmptyResultTextProps } from './emptyResultText.interface';
import React from 'react';
import SectionTitle from '../SectionTitle';

const EmptyResultText = ({ text }: EmptyResultTextProps) => {
  return (
    <SectionTitle
      as="h3"
      style={{
        textAlign: 'center',
        color: '#707070',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
      }}
    >
      {text}
    </SectionTitle>
  );
};

export default EmptyResultText;
