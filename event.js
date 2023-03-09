// Event Object
// target, preventDefault() (事件不提交)
// let h1 = document.querySelector('h1')
// h1.addEventListener('click', (e) => {
//   console.log(e.target.innerHTML)
// })

// localstorage
/**
 * setItem(key, value)
 * getItem(key)
 * removeItem(key)
 * clear()
 */
// sessionstorage (关闭浏览器的时候销毁)
// storage 存的时候都会转换为String, 如果想要取出原来的类型，如下
/**
 * JSON.stringify()
 * JSON.parse()
 */
// let friends = ['1', '2', '3']
// localStorage.setItem('friend', JSON.stringify(friends))
// console.log(JSON.parse(localStorage.getItem('friend')))
