## 错误捕获原理

1. window.onerror全局错误捕获
2. unhandledrejection事件捕获未处理的promise错误


### 一般错误来源

- 脚本错误
  - try...catch
  - onerror
- 资源加载错误
  - dom的onerror