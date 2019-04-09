/**
 * 深拷贝
 */

let obj = {
  name: 'wys',
  age: 20
}

let obj2 = JSON.parse(JSON.stringify(obj))
/**
 * 原生ajax
 */

let xhr = new XMLHttpRequest();
xhr.onreadystatechange(() => {
  if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
    let res = xhr.responseText;
  }
})
xhr.open(URL, false);
xhr.send()

