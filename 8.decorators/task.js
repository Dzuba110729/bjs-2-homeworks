function cachingDecoratorNew(func) {
  let cache = [];
  return function wrapper(...rest) {
    const key = rest.join(",");
    let index = cache.findIndex((element) => element.key === key);
    if (index !== -1) {
      console.log("Из кэша: " + cache[index].value);
      return "Из кэша: " + cache[index].value;
    }
    let result = func(...rest);
    cache.push({ key: key, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}


function debounceDecoratorNew(func) {
  let timeout;
  let flag = true;
  return function wrapper(...rest) {
    if (flag) {
      func(...rest);
      flag = false;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...rest);
      flag = true;
    }, ms);
  };
}

function debounceDecorator2(func) {
  let timeout;
  let flag = true;
  function wrapper(...rest) {
    wrapper.count += 1;
    if (flag) {
      func(...rest);
      flag = false;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...rest);
      flag = true;
    }, ms);
  }
  wrapper.count = 0;
  wrapper.getCount = () => console.log("Количество вызовов: " + wrapper.count);
  return wrapper;
}
