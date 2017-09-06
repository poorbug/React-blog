import Department from './components/Department'
import React from 'react'
import data from './data'
import s from './style'

export default class Playground extends React.Component {
  state = {
    departments: data,
    checkStatus: data.map(() => []).map((o, i) => new Array(data[i].jobs.length)),
    checkedNum: new Array(data.length).fill(0)
  }

  clear = () => {
    this.setState({
      checkStatus: data.map(() => []).map((o, i) => new Array(data[i].jobs.length)),
      checkedNum: new Array(data.length).fill(0)
    })
  }

  toggleDepartment = (i) => {
    const { checkStatus, checkedNum } = this.state
    const departmentStatus = new Array(data[i].jobs.length)
    if (checkedNum[i] === checkStatus[i].length) {
      departmentStatus.fill(false)
      checkedNum[i] = 0
    } else {
      departmentStatus.fill(true)
      checkedNum[i] = checkStatus[i].length
    }
    checkStatus[i] = departmentStatus
    this.setState({
      checkStatus,
      checkedNum
    })
  }

  toggleJob = (i, j) => {
    const { checkStatus, checkedNum } = this.state
    const status = !checkStatus[i][j]
    checkStatus[i][j] = status
    checkedNum[i] += status ? 1 : -1
    this.setState({
      checkStatus,
      checkedNum
    })
  }

  render() {
    const { departments, checkStatus, checkedNum } = this.state
    return (
      <div>
        <div className={s.playground}>
          <h1>招聘职位 <span onClick={this.clear}>清空</span></h1>
          {
            departments.map((o, i) => {
              return (
                <Department
                  key={i}
                  label={o.label}
                  jobs={o.jobs}
                  status={checkStatus[i]}
                  checkedNum={checkedNum[i]}
                  toggle={() => { this.toggleDepartment(i) }}
                  toggleJob={(j) => { this.toggleJob(i, j) }}
                />
              )
            })
          }
        </div>
        <div className={s.desc}>
          <p>7月1日 10:00 左右开始，到快 15:00 结束，其中吃饭与休息大概花了一个半小时左右，耗时大概 <strong>三个半小时</strong></p>
          <p>写逻辑的过程中踩到一个关于 es6 中 <strong>Array.fill()</strong> 的坑，花了不少时间在处理这个问题上</p>
          <a href='https://github.com/poorbug/poorbug.github.io/commits/master' title='提交记录'>查看提交记录</a>
        </div>
      </div>
    )
  }
}
