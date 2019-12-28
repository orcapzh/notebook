# DNS

## DNS服务结构

DNS服务器一般分三种：
- 根DNS
- 顶级DNS
- 权威DNS

h1.www.qq.com.
主机名.次级域名.顶级域名.根域名

## DNS解析过程

1. 查询缓存
   1. 浏览器缓存
   2. 系统缓存
   3. 路由器缓存
   4. ISP DNS缓存
2. 递归搜索

## 相关优化

1. DNS预解析

```html
<meta http-equiv="x-dns-prefetch-control" content="on"/>

<link rel="dns-prefetch" href="http://any.com/"/>
```