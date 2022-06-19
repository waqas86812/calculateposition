const total = document.getElementById('total')
const earn = document.getElementById('earn')
const lever = document.getElementById('lever')
const stoplose = document.getElementById('stoplose')
const takeprofit = document.getElementById('takeprofit')
const price = document.getElementById('price')
const applyBtn = document.getElementById('applyBtn')
const list = document.getElementById('list')
const position = document.getElementById('position')
const deletedBtn = document.getElementById('deletedBtn')

const listtotal = []

function render() {
  // 渲染頁面的list
  
  let htmlStr = ''

  listtotal.forEach(function (item) {
    htmlStr = htmlStr + 
    `
    <table border="1" width="350">
    <thead>
        <tr>
            <th>總倉</th>
            <th>1/4倉6.25%</th>
            <th>半倉12.5%</th>
            <th>全倉25%</th>
        </tr>
    </thead>
    <tbody>
        <tr id="position" >
            <td>${item.total}</td>
            <td>${item.total / 16}</td>
            <td>${item.total / 8}</td>
            <td>${item.total / 4}</td>
        </tr>
    </tbody>
    <div>
      <label for="">多頭停損位 : ${item.stoploselong}</label>
    </div>
    <div>
      <label for="">空頭停損位 : ${item.stoploseshort}</label>
    </div>
    <br>
    <div>
      <label for="">目前賺的 : ${item.earn}，可供應 :</label>
    </div>
    <tbody>
        <tr id="position" >
            <td>${item.forsmalltrade} 次 6.25%</td>
            <td>${item.forhalftrade} 次 半倉</td>
            <td>${item.forfulltrade} 次 全倉</td>
        </tr>
    </tbody>
    </table>
    `
  })
  list.innerHTML = htmlStr
}
{/* <label for="">止盈價位 : ${item.takeprofitprice}</label> */}
applyBtn.addEventListener('click', function () {
  listtotal.unshift({
    total: parseInt(total.value) * parseInt(lever.value),
    stoploselong: parseInt(price.value) - ( parseInt(price.value) * parseInt(stoplose.value) / 100 ),
    stoploseshort: parseInt(price.value) + ( parseInt(price.value) * parseInt(stoplose.value) / 100 ),
    forsmalltrade: parseInt(earn.value) / ( parseInt(total.value) * parseInt(lever.value) / 16 * parseInt(stoplose.value) / 100 ),
    forhalftrade: parseInt(earn.value) / ( parseInt(total.value) * parseInt(lever.value) / 8 * parseInt(stoplose.value) / 100 ),
    forfulltrade: parseInt(earn.value) / ( parseInt(total.value) * parseInt(lever.value) / 4 * parseInt(stoplose.value) / 100 ),
    earn: parseInt(earn.value)
  })
  render()
  console.log(price);
})

deletedBtn.addEventListener('click', function () {
  listtotal.shift()
  render()
})

function clear() {
  listtotal.unshift()

  render()
}
