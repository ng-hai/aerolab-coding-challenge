import { shape, arrayOf, number, string, oneOfType, func } from 'prop-types'

export const SelectPropTypes = {
  options: arrayOf(
    shape({
      value: oneOfType([number, string]).isRequired,
      text: string.isRequired,
    }).isRequired
  ).isRequired,
  onChange: func,
}
