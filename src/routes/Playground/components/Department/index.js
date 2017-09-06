import Checkbox from '../Checkbox'
import Job from '../Job'
import React from 'react'
import s from './style'

export default class Department extends React.Component {

  render() {
    const { label, jobs, toggle, status, checkedNum, toggleJob } = this.props
    const num = status.reduce((sum, o, i) => o ? sum + jobs[i].num : sum , 0)
    return (
      <div className={s.department}>
        <div data-role='header'><Checkbox checked={checkedNum === status.length} toggle={toggle} /><span>{label}</span><span data-role='num'>{num}</span></div>
        <ul data-role='body'>
          {
            jobs.map((o, i) => (
              <Job key={i} label={o.label} num={o.num} toggle={() => { toggleJob(i) }} checked={status[i]} />
            ))
          }
        </ul>
      </div>
    )
  }
}
