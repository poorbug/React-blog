import React from 'react'
import Typewriter from 'components/Typewriter'
import s from './style'

export default class Me extends React.Component {
  render() {
    return (
    	<Typewriter className={s.writer}>
            <span className={s.line}>1</span><span className={s.grey}>/**</span><br />
            <span className={s.line}>2</span><span className={s.space}/><span className={s.grey}>* Halo, this is Poorbug speaking. </span><br />
            <span className={s.line}>3</span><span className={s.space}/><span className={s.grey}>* Welcome to my blog. </span><br />
            <span className={s.line}>4</span><span className={s.space}/><span className={s.grey}>* Now is 4:11 AM. </span><br />
            <span className={s.line}>5</span><span className={s.space}/><span className={s.grey}>* I love coding.  </span><br />
            <span className={s.line}>6</span><span className={s.space}/><span className={s.grey}>*/</span><br />
            <span className={s.line}>7</span><br />
            <span className={s.line}>8</span><span className={s.green}>#Poorbug</span><span className={s.lightgrey}>{'{'}</span><br />
            <span className={s.line}>9</span><span className={s.placeholder}/><span className={s.blue}>name</span><span className={s.lightgrey}>: </span><span className={s.purple}>Poorbug</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>10</span><span className={s.placeholder}/><span className={s.blue}>desc</span><span className={s.lightgrey}>: </span><span className={s.purple}>a funny guy</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>11</span><span className={s.placeholder}/><span className={s.blue}>gender</span><span className={s.lightgrey}>: </span><span className={s.purple}>male</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>12</span><span className={s.placeholder}/><span className={s.blue}>age</span><span className={s.lightgrey}>: </span><span className={s.purple}>24</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>13</span><span className={s.placeholder}/><span className={s.blue}>company</span><span className={s.lightgrey}>: </span><span className={s.purple}>SpeedX</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>14</span><span className={s.placeholder}/><span className={s.blue}>wechat</span><span className={s.lightgrey}>: </span><span className={s.purple}>poorbug</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>15</span><span className={s.placeholder}/><span className={s.blue}>email</span><span className={s.lightgrey}>: </span><span className={s.purple}>baixiang.li@speedx.com</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>16</span><span className={s.placeholder}/><span className={s.blue}>hometown</span><span className={s.lightgrey}>: </span><span className={s.purple}>Quanzhou, Fujian</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>17</span><span className={s.placeholder}/><span className={s.blue}>living-in</span><span className={s.lightgrey}>: </span><span className={s.purple}>Wangjing West Road</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>18</span><span className={s.placeholder}/><span className={s.blue}>location</span><span className={s.lightgrey}>: </span><span className={s.purple}>(116.458859, 39.992443)</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>19</span><span className={s.placeholder}/><span className={s.blue}>profession</span><span className={s.lightgrey}>: </span><span className={s.purple}>front-end</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>20</span><span className={s.placeholder}/><span className={s.blue}>graduated</span><span className={s.lightgrey}>: </span><span className={s.purple}>Northeastern University</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>21</span><span className={s.placeholder}/><span className={s.blue}>hobby</span><span className={s.lightgrey}>: </span><span className={s.purple}>cycling</span><span className={s.lightgrey}>;</span><br />
            <span className={s.line}>22</span><span className={s.lightgrey}>{'}'}</span><br />
            <span className={s.line}>23</span><br />
            <span className={s.line}>24</span><span className={s.grey}>/**</span><br />
            <span className={s.line}>25</span><span className={s.space}/><span className={s.grey}>* I am working hard. </span><br />
            <span className={s.line}>26</span><span className={s.space}/><span className={s.grey}>* Please let me know your advice. </span><br />
            <span className={s.line}>27</span><span className={s.space}/><span className={s.grey}>* I want to be your friend. </span><br />
            <span className={s.line}>28</span><span className={s.space}/><span className={s.grey}>* Thanks. </span><br />
            <span className={s.line}>29</span><span className={s.space}/><span className={s.grey}>*/</span><br />
            <span className={s.line}>30</span>
    	</Typewriter>
    )
  }
}
