import { navbar,bottombar } from "../components/script1.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#bottombar").innerHTML=bottombar()

document.querySelector("#submit1").addEventListener("click", logindata);
let data=JSON.parse(localStorage.getItem("userdetail"))
    function logindata()
    {
        event.preventDefault()
        let email=document.querySelector("#email").value 
        let pass=document.querySelector("#pass").value 
        let count=0
        for(let i=0; i<data.length;  i++)
        {
            if(email==data[i].email && pass==data[i].pass)
            {
                count++
                alert("Login Successfully")
                window.location.href="cart.html"
                document.querySelector("#number").value =null
                document.querySelector("#email").value =null
                document.querySelector("#pass").value =null
                break;
            }
            
        }
        if(count==0)
        {
            alert("invalid Credentials")
        }
    }