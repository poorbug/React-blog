import { Author, ImgTxt, Msgboard } from 'components/'

import React from 'react'

export default class Getup extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>React 博客工程 上线</h1>
          <Author img='http://omhr7p9e5.bkt.clouddn.com/blog/monk.gif' name='朽木' email='poorbug@126.com' time='2017.03.09' path='getup' />
          <h2>bg</h2>
          <ul>
            <li>许久之前用 <a href='https://github.com/poorbug/react-redux-starter-kit' >react-redux-starter-kit</a> 做了一个静态的博客工程，名为 Blog</li>
            <li>许久之前买了一个阿里云服务器</li>
            <li>许久之前买了两个域名</li>
          </ul>
          <h2>Initial state</h2>
          <ul>
            <li>Blog 在本地可正常启动</li>
            <li>服务器全新状态</li>
            <li>域名全新状态没用过</li>
            <li>没有自己搞过服务器</li>
          </ul>
          <h2>服务器初始设置</h2>
          <ImgTxt img='http://omhr7p9e5.bkt.clouddn.com/blog/welcome.png' txt='welcome' />
          <h3>安装 Node</h3>
          <p>第一个想到的就是 Node ，从来没有搞过服务器，因此我连怎么装都不知道...</p>
          <ImgTxt img='http://omhr7p9e5.bkt.clouddn.com/blog/without%20node.png' txt='without Node' />
          <p>查了一下官方文档，和 Google 结果，据说 <a href='http://baike.baidu.com/item/apt-get'>apt-get</a> （我也是第一回知道 apt-get 这个东西）会安装一个非常老的版本，例如 2.x 之类的；6.x 与 7.x 的安装方法又不一样，于是向运维同学请教得知以下命令（有人指点果然省事许多）：</p>
          <pre>
            <code>
  <span>## 都在 root 用户下执行</span>
  {
  `

  apt-get update

  apt-get install python-software-properties -y

  curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -

  apt-get install nodejs -y  `
  }<span># 这步时间比较久，因为是在</span>
  {
  `

  node -v  `
  }<span># 查看一下版本，然后可以安装个 nvm 去切换版本</span>
  {
  `

  ---

  上面那个是 安装 7.7.1 的 node， 比较新，也可以直接 apt-get install nodejs ， 这样装的话，版本比较旧`
  }
            </code>
          </pre>
          <p>到 curl 又卡住，curl 是什么东西...</p>
          <h3>安装 <a href='https://curl.haxx.se/'>curl</a> </h3>
          <ImgTxt img='http://omhr7p9e5.bkt.clouddn.com/blog/curl.png' txt='curl' />
          <blockquote>
            <p>
              command line tool and library
              <br/>
              for transferring data with URLs
            </p>
          </blockquote>
          <p>
            根据控制台提示 <code>apt-get install curl</code> , done. <br/>
            然后继续安装 Node , done.
          </p>
          <h3>安装 Git</h3>
          <p>
            <code>apt-get git</code> <br/>
            但是博客工程是一个私有工程，需要给配秘钥，以前在开发 <a href='http://www.wandoujia.com/apps/com.frimap'>Frimap</a> 的时候给配过，但是早已忘记了，于是 <a href='https://docs.gitlab.com/ce/ssh/README.html'>Google</a> 之。
          </p>
          <blockquote>
            <p>ssh-keygen -t rsa -C "your.email@example.com" -b 4096</p>
          </blockquote>
          <ImgTxt img='http://omhr7p9e5.bkt.clouddn.com/blog/ssh.png' txt='~/.ssh/id_rsa.pub' />
          <p>得到一串 ssh-rsa 开头的长串，粘到 Git 工程中的 Deploy keys 中；在服务器目录下：</p>
          <pre>
            <code>
  {
  `git clone xxxxxxxxxxxxx

  git pull`
  }
            </code>
          </pre>
          <p>工程即可得。</p>
          <h3>安装 <a href='https://npm.taobao.org/'>cnpm</a> </h3>
          <p>
            试着 <code>npm install</code> 一下，发现没有梯子果然很慢，甚至根本 install 不了... <br/>
            cnpm 早有耳闻，一直有梯，从未用过。服务器搭梯子有点费劲，用 cnpm 还是比较省事儿的。
          </p>
          <blockquote>
            <p>npm install -g cnpm --registry=https://registry.npm.taobao.org   # 安装cnpm</p>
          </blockquote>
          <p>
            则，可 <code>cnpm install</code> 
            <br/>
            然后， <code>npm start</code> 工程成功启动。
          </p>
          <h3>安装 <a href='https://nginx.org/en/'>NGINX</a> </h3>
          <p>
            之前搞公司前端测试服务器的时候曾经搞过一点 NGINX 相关的配置，但是只是很皮毛的东西，无非是写一些路由配置。 <br/>
            <a href='https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-14-04-lts'>Google: 'nginx ubuntu' 的第一个结果：</a> 
          </p>
          <blockquote>
            <p>sudo apt-get install nginx</p>
          </blockquote>
          <p>NGINX, done.</p>
          <h3>域名解析</h3>
          <p>在阿里云的控制台中找域名解析，将服务器 ip 填入即可。</p>
          <h3>NGINX 配置</h3>
          <ImgTxt img='http://omhr7p9e5.bkt.clouddn.com/blog/nginx%20default.png' txt='配置文件路径' />
          <pre>
            <code>
  {
  `server {
    listen 80;
    server_name your.domain;
    location / {
      proxy_pass                          http://your ip address:port/;
      proxy_set_header Host               $host;
      proxy_set_header X-Real-IP          $remote_addr;
      proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
      client_body_buffer_size             128k;
      client_max_body_size                1m;
      proxy_connect_timeout               90;
      proxy_send_timeout                  90;
      proxy_buffer_size                   4k;
      proxy_buffers                       4 32k;
      proxy_busy_buffers_size             64k;
    }
  }`
  }
            </code>
          </pre>
          <p>保存，启动 NGINX。</p>
          <pre>
            <code>
  {
  `sudo nginx

  sudo nginx -s reload`
  }
            </code>
          </pre>
          <h3>访问</h3>
          <p>直到目前为止，我认为一切都OK了。</p>
          <ul>
            <li>域名已解析</li>
            <li> <code>npm start</code> 已启动</li>
            <li>NGINX 已配置并启动 <code>sudo nginx</code> </li>
          </ul>
          <p>浏览器访问 poorbug.tech ，能够成功访问。✌️</p>
          <p><strong>补充：</strong>运行 <code>npm run deploy:prod</code> 即可</p>
          <p><del>但是，当我晚上试着访问时，发现页面 502 了，目测是工程挂了，上去一看确实是，于是到公司的工程中翻找同事写的上线脚本，发现了一丝线索。</del></p>
          <blockquote><p><del><code>run('forever start -c "npm run start-prod" .')</code></del></p></blockquote>
          <p><del><a href='https://www.npmjs.com/package/forever' >forever</a>又是什么鬼?</del></p>
          <blockquote>
            <p><del>A simple CLI tool for ensuring that a given script runs continuously (i.e. forever).</del></p>
          </blockquote>
          <p><del><code>$ [sudo] npm install forever -g</code> 如提示安装 </del></p>
          <p>
            <del>
            run command <code>forever start -c "npm run start-prod"</code>  <br/>
            报错！不解，Google 了一下，得到此解 <br/>
            <a href='https://github.com/foreverjs/forever/issues/540'>https://github.com/foreverjs/forever/issues/540</a> <br/>
            细看后发现原来在同事的脚本中后面有一个 . 表示路径，被我忽略了。于是重新 run command ， done.
            </del>
          </p>
          <p><strong>补充：</strong>后来在与同事聊天中得知，原来 <code>forever</code> 的作用是让工程一直处于运行的状态，服务端渲染才需要，因此此处只要生成静态文件部署就行了。</p>
          <h3>尾声</h3>
          <p>
            到此，Blog 工程跑起来了。感觉在这个过程中，分而治之的思想很好的解决了这个问题，把每一个工具都安装配置调试好了，那么工程就跑起来了。 <br/>
            完美。
          </p>
        </article>
        <Msgboard path='getup' />
      </div>
    )
  }
}
