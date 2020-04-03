export function toInt(val) {
  return parseInt(val, 10);
}

export function saveToLocalstorage(key, data) {
  if (window.localStorage) {
    try {
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export function getFromLocalstorage(key) {
  if (window.localStorage) {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
      console.error(error)
    }
  }
}
