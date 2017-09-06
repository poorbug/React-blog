import Checkbox from '../Checkbox'
import React from 'react'
import s from './style'

export default class Job extends React.Component {
  render() {
    const { toggle, checked, label, num } = this.props
    return (
      <li className={s.job}>
        <Checkbox checked={checked} toggle={ toggle } /><span data-role='label'>{label}</span><span data-role='num'>{num}</span>
      </li>
    )
  }
}
