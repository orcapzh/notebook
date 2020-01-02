// 模拟微任务
let len = 0
const queue = []

function enqueue(callback, arg) {
  queue[len] = callback
  queue[len+1] = arg

  len += 2

  if (len == 2) {
    scheduleFlush()
  }
}

function flush() {
  for (let i = 0; i < len; i+=2) {
    const callback = queue[i]
    const arg = queue[i+1]

    callback(arg)

    queue[i] = queue[i+1] = undefined
  }

  len = 0
}

const scheduleFlush = (() => {
  const observer = new MutationObserver(flush)
  const node = document.createTextNode('')

  observer.observe(node)

  return () => node.data = 0
})()

// ------

const PEDDING = 0
const FULFILLED = 1
const REJECTED = 2

function registe(promise, newPromise, onFulfilled, onRejected) {
  promise.callbacks.push({
    onFulfilled,
    onRejected,
    promise: newPromise
  })
}

function publish(promise) {
  const cbs = promise.callbacks


}

function invokeCallback(promise, callback, value) {
  if (typeof callback === 'function') {
    try {
      value =
    }
  }
}

function isObjectOrFunction(value) {
  return typeof value === 'object' || typeof value === 'function'
}

function fulfill(promise, value) {
  if (promise.state !== PEDDING) return

  promise.value = value
  promise.state = FULFILLED
  // invoke functions
  enqueue(publish, promise)
}

function resolve(promise, value) {
  if (promise === value) {
    throw Error('resolved by promise self')
  } else if (isObjectOrFunction(value)) {
    try {
      const then = value.then

      if (typeof then === 'function') {
        enqueue(function () {
          let done = false

          try {
            then.call(value, newValue => {
              if (done) return
              done = true
              if (newValue === value) {
                fulfill(promise, value)
              } else {
                resolve(promise, newValue)
              }
            }, reason => {
              if (done) return
              done = true
              reject(promise, reason)
            })
          } catch(e) {
            if (!done) {
              done = true
              reject(promise, e)
            }
          }
        })
      }

    } catch(e) {
      reject(promise, e)
    }
  } else {
    fulfill(promise, value)
  }
}

function reject(promise, reason) {
  if (promise.state !== PEDDING) return

  promise.reason = reason
  promise.state = FULFILLED
}

function Promise(executor) {
  this.state = PEDDING
  this.value = undefined
  this.callbacks = []

  if (this instanceof Promise) {
    const promise = this

    try {
      executor(function (value) {
        return resolve(promise, value)
      }, function (reason) {
        return reject(promise, reason)
      })
    } catch(e) {
      reject(promise, e)
    }
  }
}

function noop() {}

Promise.prototype.then = function (onFulfilled, onRejected) {
  const promise = this

  const newPromise = new this.constructor(noop)

  if (promise.status === PEDDING) {
    registe(promise, newPromise, onFulfilled, onRejected)
  } else {
    enqueue(() => {invokePromiseCallbacks})
  }
}


/*
Terminology
  -----------
  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.
  A promise can be in one of three states: pending, fulfilled, or rejected.
  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.
  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.
*/

/*
The Promise Resolution Procedure

This treatment of thenables allows promise implementations to interoperate, as long as they expose a Promises/A+-compliant then method. It also allows Promises/A+ implementations to "assimilate" nonconformant implementations with reasonable then methods.

To run [[Resolve]](promise, x), perform the following steps:

- promise与x全等，则rejct
- x是promise，接管promise的状态
  - x处于pending状态则等待
  - x的fulfill或者reject直接影响promise
- x是对象或者函数
  - then -> x.then
  - 如果获取x.then时报错，则reject promise
  - 如果then是函数，x作为上下文调用then，参数为[resolve, reject]
    - 当resolve被调用以参数y调用使，重新执行 [[Resolve]](promise, y)
    - reject被调用则直接reject promise
- 否则 fulfill promise、
If a promise is resolved with a thenable that participates in a circular thenable chain, such that the recursive nature of [[Resolve]](promise, thenable) eventually causes [[Resolve]](promise, thenable) to be called again, following the above algorithm will lead to infinite recursion. Implementations are encouraged, but not required, to detect such recursion and reject promise with an informative TypeError as the reason.
*/