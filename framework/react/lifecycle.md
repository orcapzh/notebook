# 生命周期

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

主要经历三个阶段：
- 挂载
  - constructor
  - static getDerivedStateFormProps
  - render
  - componentDidMount
- 更新
  - static getDerivedStateFromProps
  - shouldComponentUpdate
  - render
  - getSnapshotBeforeUpdate
  - componentDidUpdate
- 卸载
  - componentWillUnmount
