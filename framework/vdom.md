# Virtual Dom

## 本质

通过js对象表示dom，通过对比vdom树，计算出更新的最短路径，批量更新到真实的DOM树上。

- 提供了一个中间层表示，使跨端渲染能够复用
- 可维护性
- 在大量修改的操作时，获取一个相对合理的修改路径

## Diff

diff算法中关注点：
- 节点类型
- 属性数据
- 子节点对象

```js
function sameVnode (a, b) {
  return (
    a.key === b.key &&  // key值
    a.tag === b.tag &&  // 标签名
    a.isComment === b.isComment &&  // 是否为注释节点
    // 是否都定义了data，data包含一些具体信息，例如onclick , style
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b) // 当标签是<input>的时候，type必须相同
  )
}

//新的text不存在
if (isUndef(vnode.text)) {
  if (isDef(oldCh) && isDef(ch)) {
    if (oldCh !== ch)
      updateChildren(elm, oldCh, ch, insertedVnodeQueue);
  }
  //旧的子节点不存在，新的存在
  else if (isDef(ch)) {
    //旧的text存在
    if (isDef(oldVnode.text))
      api.setTextContent(elm, '');
    //把新的插入到elm底下
    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
  }
  //新的子节点不存在,旧的存在
  else if (isDef(oldCh)) {
    removeVnodes(elm, oldCh, 0, oldCh.length - 1);
  }
  //新的子节点不存在,旧的text存在
  else if (isDef(oldVnode.text)) {
    api.setTextContent(elm, '');
  }
}
```



### react diff

https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/

https://medium.com/react-in-depth/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-67f1014d0eb7?
