import styled from 'styled-components'

const Paper = styled.div`
  background: #ffffff;
  padding: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 3px;

  box-shadow: 0px 0px 51px 0px rgba(0, 0, 0, 0.08),
    0px 6px 18px 0px rgba(0, 0, 0, 0.05);
  transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0px);

  &:hover {
    box-shadow: 0px 0px 114px 0px rgba(0, 0, 0, 0.08),
      0px 30px 25px 0px rgba(0, 0, 0, 0.05);
    transform: translateY(-5px);
  }
`

export default Paper
