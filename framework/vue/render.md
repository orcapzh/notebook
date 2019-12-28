# render

## 异步更新队列

为了避免重复执行相同的Watcher，假如每次Watch得到通知时都执行，那么同一个函数中，如果先后对多个状态进行改变，会触发多次视图渲染的Watche执行

因为异步更新队列，所以`$nextTick`

> One example we can look at is when your data has multiple properties called message and title. What if the message and the title are updated at the exact same time? The component will be updated twice which is not efficient. To avoid this inefficiency the Watcher is added into the queue and then it’s sorted by specific order when it’s consumed. **An example of an order would be parent component to a child component.** During this process, duplicated Watchers are also removed from Vue’s queue.

> Another thing you need to remember is the nextTick API. This is a Vue function to consume and flush all Watchers within the queue. Once all watchers have been consumed and flushed, the DOM is updated in the Watcher’s run() function. The API is called by Vue automatically so that you don’t have to care about it. That being said, you still have the ability to call the run() function by yourself.


An asynchronous deferring mechanism.
In pre 2.4, we used to use microtasks (Promise/MutationObserver)
but microtasks actually has too high a priority and fires in between
supposedly sequential events (e.g. #4521, #6690) or even between
bubbling of the same event (#6566). Technically setImmediate should be
the ideal choice, but it's not available everywhere; and the only polyfill
that consistently queues the callback after all DOM events triggered in the
same loop is by using MessageChannel.


  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.