import { Author, Msgboard } from 'components/'

import React from 'react'
import SubitleBox from './subtitleBox'
import TitleBox from './titleBox'

const PATH = 'resume'
export default class Resume extends React.Component {

  render() {
    return (
      <div>
        <article>
          <h1>简历</h1>
          <Author time='2017.06.01' path={PATH} />
          <TitleBox title='李白翔'>
            <ul>
              <li>2015 届 本科</li>
              <li>东北大学 软件工程</li>
              <li>15040051932</li>
              <li><a href='mailto:poorbug@126.com'>poorbug@126.com</a></li>
            </ul>
          </TitleBox>
          <TitleBox title='经历'>
            <ul>
              <li>高一开始学习算法与数据结构，高二进入 NOIP 决赛</li>
              <li>本科四年全外教授课（国际班）</li>
              <li>毕业半年成为团队核心成员</li>
              <li>2015 年在东软熙康获得特殊加薪</li>
              <li>2016 年独自负责野兽骑行所有前端业务近半年</li>
              <li>2016 年野兽骑行优秀员工</li>
            </ul>
          </TitleBox>
          <TitleBox title='工作经验'>
            <SubitleBox title='野兽骑行'>
              <li>时间：2016.03 至 今</li>
              <li>岗位：前端工程师</li>
              <li>项目：官网、电商平台、Hybrid 工程、Tetris 组件库、内部平台...</li>
              <li>技术：React、Sass、Webpack、Node</li>
              <li>身份：主管电商平台 & Hybrid 工程，同时参与其他工程的开发</li>
              <li>规模：200 人</li>
            </SubitleBox>
            <SubitleBox title='东软熙康健康科技有限公司'>
              <li>时间：2015.07 — 2016.03</li>
              <li>技术：JAVA、SSH、HTML、CSS、Javascript</li>
              <li>项目：掌上云医院</li>
              <li>规模：2000 人</li>
              <li>介绍：作为 JAVA 工程师参与互联网医疗项目开发，主要工作内容是为 Native 应用开发 Server，同时全面负责 Hybrid 工程，协调 Native 与 Hybrid 开发。</li>
            </SubitleBox>
          </TitleBox>
          <TitleBox title='项目经验'>
            <SubitleBox title='野兽骑行官网' link='https://www.speedx.com/'>
              <li>2016 年 3 月 至 今</li>
              <li>HTML & React & SSR & 国际化</li>
              <li>野兽骑行互联网入口，主要负责展示产品介绍</li>
              <li>侧重设计感与科技感</li>
            </SubitleBox>
            <SubitleBox title='野兽骑行电商平台' link='https://shop.speedx.com/'>
              <li>2016 年 12 月 至 今</li>
              <li>React & SSR & 国际化</li>
              <li>从 0 开始搭建</li>
              <li>主要负责产品销售</li>
              <li>侧重产品与逻辑</li>
            </SubitleBox>
            <SubitleBox title='野兽骑行 Tetris 通用组件库'>
              <li>2016 年 09 月 至 今</li>
              <li>前端工程通用 React 组件库</li>
              <li>从 0 开始搭建</li>
              <li>高复用性</li>
              <li>模块化</li>
              <li>50＋ 个组件</li>
              <li>100 ＋ 个方法</li>
            </SubitleBox>
            <SubitleBox title='野兽骑行 Hybrid 工程'>
              <li>2016 年 4 月 至 今</li>
              <li>原生 & React</li>
              <li>从 0 开始搭建</li>
              <li>主要负责 App 内页面 & HTML5 活动页面</li>
              <li>侧重移动端兼容 & 第三方功能兼容</li>
            </SubitleBox>
            <SubitleBox title='掌上云医院'>
              <li>2015 年 7 月  至  2016 年 3 月</li>
              <li>东软熙康健康科技有限公司</li>
              <li>JAVA 后端 & Hybrid 前端</li>
            </SubitleBox>
            <SubitleBox title='Frimap' link='http://www.wandoujia.com/apps/com.frimap'>
              <li>2015 年 9 月  至  2016 年 3 月</li>
              <li>产品 & Ionic 前端</li>
              <li>和小伙伴工作之余开发的应用</li>
            </SubitleBox>
          </TitleBox>
          <TitleBox title='其他'>
            <ul>
              <li>喜欢做饭</li>
              <li>喜欢骑车</li>
              <li>热爱生活</li>
            </ul>
          </TitleBox>
        </article>
        <Msgboard path={PATH} />
      </div>
    )
  }
}