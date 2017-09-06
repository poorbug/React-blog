import React from 'react'
import s from './style'

const ICON = () => (
  <svg viewBox='0 0 1024 1024' width='12.5rem' height='12.5rem'>
    <path d='M347.776 834.624h1.216a81.92 81.92 0 0 0 117.312-1.216l314.24-313.216 212.48-211.136a86.4 86.4 0 0 0 0-119.04 84.48 84.48 0 0 0-119.616 0l-210.624 211.136h-1.344v0.64L407.68 655.68 153.152 401.152a85.12 85.12 0 0 0-119.04 0 83.84 83.84 0 0 0 0 119.04l313.664 314.432z' fill='#dbdbdb' />
  </svg>
)

export default class Checkbox extends React.Component {
  render() {
    const { checked, toggle } = this.props
    return (
      <span className={s.checkbox} onClick={toggle}>
        { checked && <ICON /> }
      </span>
    )
  }
}
