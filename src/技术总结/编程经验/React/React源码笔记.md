# setState 后 React 做了什么

this.updater.enqueueSetState(this, partialState, callback, 'setState');

## enqueueSetState

- 获取 当前 Fiber
- lane 创建任务优先级？
- 创建 update 对象,

- ` enqueueUpdate(fiber, update);`: 加入更新队列

- 调用 scheduleUpdateOnFiber

## scheduleUpdateOnFiber

- 更新当前到 root 任务优先级`markUpdateLaneFromFiberToRoot`
- 据任务的类型，发起异步调度任务，ensureRootIsScheduled

## performSyncWorkOnRoot

```js
function performSyncWorkOnRoot(root) {
  /* render 阶段 */
  let exitStatus = renderRootSync(root, lanes);
  /* commit 阶段 */
  commitRoot(root);
  /* 如果有其他的等待中的任务，那么继续更新 */
  ensureRootIsScheduled(root, now());
}
```

beginWork

是否需要调和
比对变化、查看是否更新

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99afa68f8ab94c93be41df70db0ae488~tplv-k3u1fbpfcp-watermark.awebp?)
