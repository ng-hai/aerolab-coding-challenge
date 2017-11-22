import styled from 'styled-components'

const Button = styled.button`
  min-height: 2.25rem;
  box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);
  letter-spacing: 0;
  line-height: 1.9375rem;
  text-transform: capitalize;
  padding: 0 8px;
  margin: 0 4px;
  color: #ff6600;
  background-color: #ffffff;
  border-radius: 3px;
  transition: all 0.3s ease 0s;
  border: 1px solid #ff8800;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${props => props.noShadow && `box-shadow: none`};

  ${props =>
    props.active &&
    !props.noShadow &&
    `box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2)`};

  ${props =>
    (props.primary || props.active) &&
    `
    background-image: linear-gradient(35deg, #FF6600 10%, #FF8800 100%);
    color: #ffffff;
    border: none;
  `};

  &:hover {
    ${props =>
    !props.noShadow && `box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2)`};
  }
`

export default Button
