import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Button = styled.button`
  user-select: none;
  outline: none;
  border: none;
  border-radius: 3px;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.1rem;
  padding: 0 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-out;
  font-weight: 600;
  background: transparent;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.05);

  & > svg {
    transition: all 200ms ease-out;
  }

  @media (max-width: 420px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  ${({ primary }) =>
    primary &&
    `
    background: #ff8800;
    color: #fff;
  `};

  ${({ secondary, active }) =>
    secondary &&
    `
    background: #fff;
    ${active && 'color: #ff8800;'}
  `};

  ${({ loading }) =>
    loading &&
    `
    cursor: default;
    filter: grayscale(50%);
    & > svg {
      animation: 1s ${loadingAnimation} ease-out infinite;
      fill: none;
      margin-left: 10px;
    }
  `};

  &:hover {
    ${({ primary }) =>
    primary &&
      `
      background: #ff6600;
    `};
    ${({ secondary }) =>
    secondary &&
      `
      background: #fff;
      color: #ff6600;
    `};
  }
`

export default Button
