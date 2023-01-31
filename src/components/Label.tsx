import React, { ReactNode } from 'react';
import './label.css';

interface Props {
  children: ReactNode;
  variant: 'default' | 'success' | 'waring' | 'error' | 'info';
  style: Record<string, unknown>;
}

export default function Label(props: Props) {
  const { children, variant = 'default', style } = props;
  return (
    <div className={`label label-${variant}`} style={style}>
      {children}
    </div>
  );
}
