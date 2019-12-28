# XSRF

通过使已登陆的用户发出非本意的请求。主要利用的是，服务器可以验证用户是否登陆，但无法识别请求本身是否用户自愿发起。

## 防御措施

- 检测[Referer](https://zh.wikipedia.org/wiki/HTTP%E5%8F%83%E7%85%A7%E4%BD%8D%E5%9D%80)
- 添加校验token，通过对只有合法网站才能获得的token进行校验