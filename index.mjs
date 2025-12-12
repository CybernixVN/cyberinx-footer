import React from 'react';

export function Footer() {
  return React.createElement(
    'div',
    { className: 'py-4 text-center opacity-70 text-sm' },
    React.createElement(
      'a',
      {
        href: 'https://cybernix.vn',
        target: '_blank',
        rel: 'noopener noreferrer',
        style: { color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }
      },
      '© 2025 Cybernix.vn – All rights reserved.'
    )
  );
}
