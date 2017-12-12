import React, { PureComponent } from 'react'
import styled from 'styled-components'

import caret from '../assets/caret.png'

import { SelectPropTypes } from './propTypes'

const Wrapper = styled.div`
  position: relative;
  max-width: 200px;
  min-width: 170px;
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1.5rem;
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  user-select: none;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.05);

  &:after {
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -3px;
    width: 14px;
    height: 8px;
    transform: rotate(0deg);
    transition: all 0.2s ease-out;
    background: url(${caret}) 0 0 no-repeat;
    ${({ active }) =>
    active &&
      `
      transform: rotate(-180deg);
    `};
  }
`

const Dropdown = styled.ul`
  position: absolute;
  margin: 0 auto;
  margin-top: -1px;
  padding: 0;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;

  background: #fff;
  border-top: none;
  border-bottom: none;
  border-radius: 0 0 3px 3px;
  list-style: none;
  transition: all 0.1s ease-out;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.05);

  max-height: 0;
  overflow: hidden;

  ${({ active }) =>
    active &&
    `
      max-height: 400px;
      overflow: auto;
  `};
`

const Option = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  transition: all 0.2s ease-out;

  &:hover {
    background: #f0f0f0;
  }
`

const Label = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`

class Select extends PureComponent {
  static propTypes = SelectPropTypes

  static defaultProps = {
    options: [],
    value: '',
    defaultValue: '',
    text: '',
  }

  state = {
    active: false,
    value: this.props.value || this.props.defaultValue,
    text: '',
  }

  componentDidMount () {
    const { options, defaultValue, value } = this.props
    if (options.length > 0) {
      const selectedValue = value || defaultValue
      if (selectedValue) {
        const { text, value } = options.find(
          option => (option.value = selectedValue)
        )
        this.setState({ text, value })
      } else {
        const { text, value } = options[0]
        this.setState({ text, value })
      }
    }

    document.addEventListener('click', this.removeActive)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.removeActive)
  }

  removeActive = event => {
    if (this.selectRef && !this.selectRef.contains(event.target)) {
      this.setState({ active: false })
    }
  }

  toggleActive = () => {
    this.setState(({ active }) => ({ active: !active }))
  }

  onSelect = ({ text, value }) => () => {
    this.setState({ value, text })
    this.props.onChange && this.props.onChange(value)
  }

  setSelectRef = node => {
    this.selectRef = node
  }

  render () {
    const { text, active } = this.state
    const { options } = this.props

    return (
      <Wrapper
        innerRef={this.setSelectRef}
        active={active}
        onClick={this.toggleActive}
      >
        <Label>{text}</Label>
        <Dropdown active={active}>
          {options.map(option => (
            <Option
              key={option.value}
              children={option.text}
              onClick={this.onSelect(option)}
            />
          ))}
        </Dropdown>
      </Wrapper>
    )
  }
}

export default Select
