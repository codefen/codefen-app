import { css } from 'styled-components';

export const sizes = {
  mobile: 480,
  tablet: 768,
  desktop: 1260,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
