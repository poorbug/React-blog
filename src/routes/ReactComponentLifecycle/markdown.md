### React component lifecycle
[文档](https://facebook.github.io/react/docs/react-component.html)

#### Mounting
These methods are called when an instance of a component is being created and inserted into the DOM:

- constructor()
- componentWillMount()  // called before render()
- render()
- componentDidMount() // after render()

#### Updating
An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

- componentWillReceiveProps()
- shouldComponentUpdate()  // invoked before rendering but `forceUpdate()`
- componentWillUpdate() // invoked before rendering but `initial render`
- render()
- componentDidUpdate()

#### Unmounting
This method is called when a component is being removed from the DOM:

- componentWillUnmount()


constructor() -> componentWillMount() -> render() -> componentDidMount()

* forceUpdate() will trigger render()
* shouldComponentUpdate() can return false
