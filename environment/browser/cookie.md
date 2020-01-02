# Cookie

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)

### 作用
- 会话状态
- 个性化设置
- 行为跟踪

### 交互方式

服务器通过`Set-Cookie`响应头设置Cookie到用户代理，用户代理下一次发送请求时在头部`Cookie`字段带回。

### 类型

- 未指定过期时间，浏览器关闭自动删除
- 设置了`Expires`或`Max-Age`

### 安全相关

为了防止[XSS](../security/XSS.md)攻击，`Document.cookie`无法访问带有`HttpOnly`标记的Cookie。

[CSRF](../security/CSRF.md)

### 作用域

通过`Domain`和`Path`控制Cookie作用域。即Cookie需要被携带的请求URL。

- `Domain`不指定则默认当前文档的主机，不包含子域名，若指定则一般包含子域名
- `Path`标识主机下，存在对应路径的请求才会带上Cookie

例子：
- `Domain=mozilla.org`则包含`developer.mozilla.org`
- `Path=/docs`能够匹配`/docs`、`/docs/Web`、`/docs/Web/HTTP`

### 操作Cookie

```js
// 通过 Document.cookie 可以创建新的 Cookie，也可访问非 HttpOnly 的 Cookie
document.cookie = "a=123"
document.cookie = "b=456"
console.log(document.cookie) // “a=123; b=456”
```

### js-cookie

- cookie会跟随http发送到服务器，所以需要对特殊字符进行转义
- 使用`expires`，`max-age`在IE中不支持
- 只会以第一个`;`之前的值为准
- 时间格式为UTC时间