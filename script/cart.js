import {navbar,bottombar } from "../components/script1.js";

document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#bottombar").innerHTML=bottombar()

let getfromlocal=JSON.parse(localStorage.getItem("items")) || []
let price=[]
function appendCart(getfromlocal)
{
    getfromlocal.map(function(el,index)  {
        let img=document.createElement("img")
        img.src=el.img2
        img.style.width="100%%"
        img.style.height="65%"
        let name1=document.createElement("h5")
        name1.innerText=el.name2
        let pri=document.createElement("p")
        pri.innerText="Rs "+el.price2
        let btnRemove=document.createElement("button")
        btnRemove.id="remove"
        btnRemove.addEventListener("click",function () {
            removeFromcart(el,index)
        })
        btnRemove.innerText="Remove"
        let div=document.createElement("div")
        div.style.textAlign="center"
        div.style.height="350px"
        div.append(img,name1,pri,btnRemove)
        document.querySelector("#show_cart").append(div)
        price.push(el.price2)
        console.log()
    })
}
function removeFromcart(el,index)
{
    getfromlocal.splice(index,1)
    localStorage.setItem("items", JSON.stringify(getfromlocal))
    window.location.reload()
    appendCart(getfromlocal)
}
appendCart(getfromlocal)
//console.log(price)
let sum=0
for(let i=0; i<price.length; i++)
{
    sum=sum+price[i]
}
document.querySelector("#count").innerHTML=" -"+price.length
document.querySelector("#toal_price").innerText="Total Cost - "+Number.parseFloat(sum).toFixed(2)
