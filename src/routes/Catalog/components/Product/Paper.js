import styled from 'styled-components'

const Paper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  transition: z-index 0.325s ease;

  & > * {
    z-index: 1;
  }

  &:hover {
    z-index: 2;
  }

  &::before {
    content: '';
    background: white;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    border-radius: 2px;
    transform: scale(1, 1);
    transform-origin: top;
    transition: all 0.325s ease;
  }

  &:hover::before {
    box-shadow: 0px 1px 20px 10px rgba(0, 0, 0, 0.05),
      0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 3px 1px -2px rgba(0, 0, 0, 0.05);
    transform: scale(1.05, 1.2);
  }

  & > img {
    transform: scale(1, 1);
    transform-origin: top;
    transition: all 0.2s ease;
  }

  &:hover > img {
    transform: scale(1.02, 1.02);
  }

  & > button {
    position: absolute;
    top: 280px;
    visibility: hidden;
    transition: all 0.325s ease;
    transform-origin: top;
    height: 0;
    overflow: hidden;
  }

  &:hover > button {
    visibility: visible;
    height: 2.5rem;
    transition: all 0.325s ease;
  }
`

export default Paper
