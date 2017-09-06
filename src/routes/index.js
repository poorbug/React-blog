import App from './SpeedXApp/'
import Closure from './closure'
import Cors from './CORS'
import Getup from './Getup/'
import Hoisting from './Hoisting'
import Home from './Home/'
import Layout from '../layouts/'
import Me from './me/'
import MySetInterval from './mySetInterval'
import NormalFlow from './NormalFlow'
import Playground from './Playground/'
import PlaygroundResult from './playgroundResult'
import Render from './render'
import Resume from './Resume'
import ScopeChain from './ScopeChain'
import Threejs from './Threejs'

export const createRoutes = () => ({
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'playground',
      component: Playground
    },
  	{
  		path: 'me',
  		component: Me
  	},
    {
      path: 'app',
      component : App
    },
    {
      path: 'getup',
      component : Getup
    },
    {
      path: 'threejs',
      component : Threejs
    },
    // {
    //   path: 'resume',
    //   component: Resume
    // },
    {
      path: 'setInterval',
      component: MySetInterval
    },
    {
      path: 'closure',
      component: Closure
    },
    {
      path: 'render',
      component: Render
    },
    {
      path: 'normal-flow',
      component: NormalFlow
    },
    {
      path: 'hoisting',
      component: Hoisting
    },
    {
      path: 'scope-chain',
      component: ScopeChain
    },
    {
      path: 'cors',
      component: Cors
    },
    {
      path: 'playground-result',
      component: PlaygroundResult
    }
  ]
})
export default createRoutes
