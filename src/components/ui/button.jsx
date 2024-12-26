import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold text-white transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

