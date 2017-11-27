import styled from 'styled-components'

const Button = styled.button`
  user-select: none;
  outline: none;
  border: none;
  border-radius: 2px;
  background-image: linear-gradient(135deg, #ff6600 0%, #ff8800 100%);
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.1rem;
  color: white;
  padding: 0 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
  }
`

export default Button
