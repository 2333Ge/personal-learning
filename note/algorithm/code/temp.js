const debounce = (fn, delay) => {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const thrtotle = (fn, delay) => {
  let previousTime;
  return (...args) => {
    if (previousTime && Date.now() - previousTime < delay) {
      return;
    }
    previousTime = Date.now();
    fn(...args)
  }
}