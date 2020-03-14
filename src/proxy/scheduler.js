import { nextTick } from '../utils/nextTick'

let has = {};
let queue = [];
let waiting = false;

function queueWatcher(vm) {
  const id = vm.id;

  if (has[id] == null) {
    has[id] = true;
    
    queue.push(vm);

    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

function flushSchedulerQueue() {
  let vm, id;

  for (let index = 0; index < queue.length; index++) {
    vm = queue[index];
    id = vm.id;
    has[id] = null;
    vm.run();
  }

  queue = []
  waiting = false;
}

export {
  queueWatcher
}