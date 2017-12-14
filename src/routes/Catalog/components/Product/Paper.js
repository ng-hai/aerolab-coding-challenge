import styled from 'styled-components'

const Paper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  transition: all 0.325s ease-out;
  flex-direction: column;
  background: white;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.05);

  & > * {
    z-index: 1;
  }

  &:hover {
    z-index: 2;
  }

  ${({ layout }) =>
    layout === 'Grid' &&
    `
      @media (min-width: 992px) {

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
          transition: all 0.325s ease-out;
        }

        &:hover::before {
          box-shadow: 0px 1px 20px 10px rgba(0, 0, 0, 0.05),
            0px 2px 2px 0px rgba(0, 0, 0, 0.05), 0px 3px 1px -2px rgba(0, 0, 0, 0.05);
          transform: scale(1.05, 1.2);
        }

        & > img {
          transform: scale(0.8, 0.8);
          transform-origin: top;
          transition: all 0.2s ease-out;
        }

        &:hover > img {
          transform: scale(1, 1);
          background: none;
        }

        & button, & .attention {
          position: absolute;
          top: calc(100% - 10px);
          visibility: hidden;
          transition: all 0.325s ease-out;
          transform-origin: top;
          height: 0;
          opacity: 0;
          overflow: hidden;
        }

        &:hover button, &:hover .attention {
          visibility: visible;
          height: 2.5rem;
          opacity: 1;
          transition: all 0.325s ease-out;
        }
      }
  `};

  ${({ layout }) =>
    layout === 'List' &&
    `
      flex-direction: row;
      background: white;

      @media (max-width: 576px) {
        & > img {
          width: calc(252px / 1.5);
          height: calc(182px / 1.5);
          margin: 0.5rem;
        }
      }

      @media (max-width: 360px) {
        & > img {
          width: calc(252px / 2);
          height: calc(182px / 2);
          margin: 0.5rem;
        }
      }
  `};
`

export default Paper
