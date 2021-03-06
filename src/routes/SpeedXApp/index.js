import { Author, Msgboard } from 'components/'

import Badge from './Badge'
import BadgeNew from './Badge.new'
import Club from './Club'
import Connect from './Connect'
import Hero from './Hero'
import React from 'react'
import Record from './Record'
import s from './style'

export default class App extends React.Component {
  render() {
    return (
      <div className={s.box}>
      	<h1>新 SpeedX App 页面开发总结</h1>
        <Author img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif' name='朽木' email='poorbug@126.com' time='2016.11.14' path='app' center/>
      	<h2>背景</h2>
        <p><a href='https://www.speedx.com/app' target='_blank' >SpeedX App</a></p>
      	<p>
      		这次关于野兽App的重新设计与开发，开发到上线一共历时两周，难得最近有充足的时间来做非常细致的开发。目前页面已经上线，还在继续优化相关部分，国际化也将在近期上线。
      	</p>
      	<p>
      		这个需求的开发花了不少时间也费了很多心思，大部分时间花在了动效的优化上，再次把遇到的问题与大家分享。
      	</p>
      	<h2>关于自适应</h2>
      	<p>
      		这个页面一共分为7个模块，我在开发过程中习惯把每个模块大致做完才做下一个模块，这样做的好处一是排期的时候完全按模块来比较方便，二是整个模块一气呵成，不需要再回头看原来模块的代码细节。
      	</p>
      	<p>
      		这个页面在PC上有不少动效，但是在移动端出于性能考虑，所有动效都被取消，图片也会被压缩或者是换为较小的图片。
      	</p>
        <p>
          大部分模块会被定宽和定高然后左右居中；图片模块的宽度设定为100vw，高度按图片宽高比设置。
        </p>
      	<h2>Hero</h2>
      	<Hero className={s.externModule}/>
      	<p>
      		这个模块为了让效果更好，做的是<code>width: 100vw; height: 100vh;</code>。
      	</p>
      	<p>
      		PC上提供了<code>Android</code>和<code>iOS</code>的二维码。移动端则是有下载按钮，利用<code>userAgent</code>控制按钮的显隐；有一个需要注意的地方是在微信打开页面的情况下，当用户点击下载按钮时需要提示浏览器(Safari)打开。
      	</p>
      	<p>
      		这个模块还有一个问题,在一些小尺寸手机，例如我手头上的小米2S,如果只是粗暴的<code>height: 100vh;</code>就会出现手机图案与按钮重叠的情况，这个时候就得需要一个<code>min-height</code>了。
      	</p>
      	<h2>Connect</h2>
      	<Connect className={s.externModule} />
      	<p>
      		这一块在html标签的顺序上有一点小技巧，因为在移动端不显示手机图，只显示中控图，而且中空图是在100%与进度条下边，因此三个标签的顺序为<code>手机图－百分比与进度条－中控</code>，与视觉上的顺序相反，但是在移动端的自适应就比较方便了。
      	</p>
      	<p>
      		这部分的动画分为两部分，数字的变化是通过setTimout递归来控制累加，图案的动画通过<code>transition</code>属性来实现的，给<code>transition</code>加上delay配合setTimeout的delay就能使动画无缝衔接。
      	</p>
        <h2>Record</h2>
        <Record className={s.externModule} />
        <p>开发这一块的时候遇到一个小问题。据我了解<code>transition</code>的兼容性应该是各家都支持了，真实情况却是也是如此。但是实践中发现各家可能是因为渲染的机制不一样，不加前缀的情况下，在Chrome下会有卡顿；因此最好还是把各个前缀的<code>transition</code>都给加上。</p>
        <h2>Badge</h2>
        <Badge className={s.externModule} />
        <p>在野兽App里有一个勋章手机的活动，用户通过参加活动完成任务可以点亮相应的勋章。这一块设计师的意思是通过模糊到清晰来表达点亮的过程。经同事提醒，用雪碧图（CSS Sprite）生成的图。</p>
        <p>一开始，模糊状态是原尺寸，hover之后会变清晰与放大会<code>transform: scale(1.3)</code>(因为雪碧图用的是background-position, 所以无法指定background-size, 只能通过scale来缩放), 导致的问题是图片放大失真；后来换了一个思路，放大雪碧图的分辨率，模糊状态下是scale(.7), hover后是原尺寸的清晰图。So，这个问题解决。</p>
        <p>还有一个小技巧，模糊状态下勋章是没有边框的，清晰状态下是有边框的，设计稿切出来的则是有边框的，因此在模糊状态下加一个与背景色同样的边框，把图中的边框遮罩住，看起来就像没有边框了（其实有点反了，应该是需要边框的时候再加上边框，但是懒得找设计师改稿，加点小点子就搞定了）。</p>

        <p className={s.pc}>后来不咋忙的时候，又想给这一块的交互改改。</p>
        <BadgeNew className={s.externModule} />
        <p className={s.pc}>屏幕滚动到这个模块的时候，随机点亮几个勋章，剩下的用户通过点击可以点亮。感觉效果也不错。</p>

        <p>在测试的时候，发现部分样式在华为手机自带的系统浏览器中会失效，经过重重调查，发现transform在UC浏览器中需要加上-webkit才能生效(新一代IE？)，而华为手机的部分机型浏览器是由UC支持。</p>
        <h2>Club</h2>
        <Club className={s.externModule} />
        <p>Club这一块是最麻烦，而且花了最多工夫的部分，所以放在最后。</p>
        <p>刚了解到需求的时候，第一个感觉就是 div + img 可以搞定，控制属性的变化，transition加上动画的时长与延时就可以了。在开发2天后发现存在着很多小问题。</p>
        <p>1. 部分小圆点在闪动时会左右晃动。后来发现在width为2.5rem或者5rem的时候不会出现晃动情况，在试了几种方法后，还是没有解决这个问题，因为问题不是很大，因此先搁置处理其它问题去了。</p>
        <p>2. 设计加了需求。原本的线是只有生成的过程，没有消失的过程。</p>
        <p>在起初只有生成的需求中，若线是从右到左生成，则设置为<code>float: right;</code>（反之从左到右生成，<code>float: left;</code>），则此时当width变大时，transition就会让线看起来好像是射出去了。加上消失的需求后，一开始想的是先把float从right变为left，然后width才开始变小；但是可能是由于异步的原因，并没有按照我想象的顺序来执行动画，动画开始后，float才改变。</p>
        <p>后来，从某个网站得到灵感，用Canvas来画这个模块。用Canvas也是被卡在了画线这一步。有两种方法可以画线，<code>arc()</code>与<code>quadraticCurveTo()</code>。</p>
        <p><code>arc()</code>画出来的线是某一个圆的一部分，因此一定是规则的（多个arc组合可以画出不规则曲线）；目前我们知道的是弧线段两端的坐标，利用高中的知识，要画出这条弧线需要知道半径，因此条件不够，画不出来这条弧线（形态也不是我们想要的）。</p>
        <p><code>quadraticCurveTo()</code>用来画二次贝赛尔曲线。需要的数据是起始点，结束点与控制点三个点的坐标。起始点与结束点我们都有了，控制点用来控制弧线的形状，因此可以自己设定。但是画出曲线生成与消失的过程我们需要曲线的轨迹，在我绞尽脑汁查看文献研究贝赛尔曲线的轨迹怎么算后，我放弃了，智商已不够用。</p>
        <p>于是再花了两天的时间后，我又回到了 div + img 实现的方式中来。</p>
        <p>思考了好一会，终于想到了一个小技巧来实现线生成与消失的过程。</p>
        <p>原理与刚才说的设置float，通过改变width来实现一样。用div嵌套div，外层的div设置为<code>float: right;</code>，在线生成的时候增加外层div的width；内层div设置为<code>float: left;</code>，线消失的时候减少里层div的width，同时设置好transition的delay。完美～</p>
        <h2>总结</h2>
        <p>这回开发这个页面，首先是没有其它需求，时间充裕。自己也花了不少心思在上头，最后的效果虽有瑕疵，但是感觉总体算还挺满意。踩了不少坑，但是也涨了不少知识，特别是在动画交互方面。</p>
        <p>要问我用什么东西能开发出效果好的页面呢？用时间和用心。</p>
        <Msgboard path='app' />
      </div>
    )
  }
}
