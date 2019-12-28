# HOC

高阶组件，以组件为参数返回另一个组件的**函数**。例如Redux的connect函数。

```jsx
// 此函数接收一个组件...
function withSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
```

注意事项：
- 尽量避免修改输入组件本身
- 将所有props参数都传递下去，即输出组件获得的props全部传递
- 需要注意输入组件的静态方法若无声明，则输出组件上是没有的
- Refs不会被传递，通过`React.forwardRef`解决
