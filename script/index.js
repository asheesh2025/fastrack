import {navbar,bottombar } from "../components/script1.js";

document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#bottombar").innerHTML=bottombar()
let i=0
let image=['https://www.fastrack.in/wps/wcm/connect/fastrack/52aed9e3-d620-49bb-8b8e-5fb80726e9dd/desktop/1920X600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-52aed9e3-d620-49bb-8b8e-5fb80726e9dd-desktop-o3-koO5&impolicy=pqlow','https://www.fastrack.in/wps/wcm/connect/fastrack/532d3d01-1405-4e0e-9194-571116e1b202/desktop/1920X600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-532d3d01-1405-4e0e-9194-571116e1b202-desktop-o1RG1-8&impolicy=pqlow','https://www.fastrack.in/wps/wcm/connect/fastrack/026b029b-a062-4e3b-b245-7f6b718bc368/desktop/banner_Desktop.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-026b029b-a062-4e3b-b245-7f6b718bc368-desktop-o1wfKJy&impolicy=pqlow','https://www.fastrack.in/wps/wcm/connect/fastrack/93bc619d-5f75-4f3f-b3f2-175676b0c27c/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-93bc619d-5f75-4f3f-b3f2-175676b0c27c-desktop-nZ0GpjO&impolicy=pqlow'
,'https://www.fastrack.in/wps/wcm/connect/fastrack/87dd3813-f189-408d-a8c2-d2efed89ec2e/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-87dd3813-f189-408d-a8c2-d2efed89ec2e-desktop-nYI4n-.&impolicy=pqlow','https://www.fastrack.in/wps/wcm/connect/fastrack/ad7bf060-f0a4-4542-bfb3-34fda82b4249/desktop/1920x600.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-ad7bf060-f0a4-4542-bfb3-34fda82b4249-desktop-n.PzChT&impolicy=pqlow']
setInterval(function(){
    if(i===image.length)
    {
        i=0
    }
    let show=document.querySelector("#slideshow")
    show.innerHTML=null
     let list=image[i]
    let img=document.createElement("img")
    img.setAttribute("id","slideimg")
    img.src=list
    show.append(img)
    i++
},2500)

const url="https://fakestoreapi.com/products"
async function getData()
{
    try{
        const url="https://fakestoreapi.com/products"
        let res=await fetch(url)
        let data=await res.json()
        appendData(data)
        console.log(data)
    }
    catch(error)
    {
        console.log(error)
    }
}
getData()

function appendData(data1)
{
    data1.map(function(el,index){
        let img=document.createElement("img")
        img.src=el.image
        img.style.width="50%"
        img.style.height="75%"
        let name1=document.createElement("h3")
        name1.innerText=el.title
        let price=document.createElement("h5")
        price.innerText="Rs. "+el.price
        let btn=document.createElement("button")
        btn.id="add_to_cart"
        btn.innerText="ADD TO CART"
        btn.addEventListener("click",function ()
        {
            added (el,index)
        })
        let div1=document.createElement("div")
        div1.append(img,name1,price,btn)
        div1.style.textAlign="center"
        div1.style.height="650px"
        document.querySelector("#itemlist").append(div1)
    })
    let arr=JSON.parse(localStorage.getItem("items")) || []
    function added(el,index)
    {
        //console.log(index,el)
        let obj={
             img2 : el.image,
             name2 : el.title,
             price2 : el.price,
        }
        arr.push(obj)
        localStorage.setItem("items", JSON.stringify(arr))
        getData()
        //window.location.reload()
        let total=JSON.parse(localStorage.getItem("items")).length || 0
        document.querySelector("#item_count").innerText=(total)
        
    }
    let total=arr.length
    document.querySelector("#count").innerText=" - "+total
    

}