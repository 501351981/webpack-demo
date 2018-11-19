import './index.less'

let $=require('jquery')

setTimeout(()=>{
    $("#app p").html("首页被jquery改变了")
},3000)